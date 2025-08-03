/**
 * Migration to create margin_accounts table
 */
exports.up = function(knex) {
  return knex.schema.createTable('margin_accounts', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.decimal('available_collateral', 20, 2).defaultTo(0);
    table.decimal('borrowed_funds', 20, 2).defaultTo(0);
    table.decimal('interest_rate', 6, 4).defaultTo(0.05); // Base interest rate (5%)
    table.timestamp('last_interest_calculation').defaultTo(knex.fn.now());
    table.decimal('margin_level', 10, 2).defaultTo(100); // Percentage
    table.enum('status', ['active', 'margin_call', 'liquidating', 'suspended']).defaultTo('active');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('margin_accounts');
};
