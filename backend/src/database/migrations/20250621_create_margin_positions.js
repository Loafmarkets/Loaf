/**
 * Migration to create margin_positions table
 */
exports.up = function(knex) {
  return knex.schema.createTable('margin_positions', (table) => {
    table.increments('id').primary();
    table.integer('margin_account_id').references('id').inTable('margin_accounts').onDelete('CASCADE').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.integer('token_id').references('id').inTable('tokens').onDelete('CASCADE').notNullable();
    table.integer('property_id').references('id').inTable('properties').onDelete('CASCADE').notNullable();
    table.decimal('token_amount', 20, 6).notNullable();
    table.decimal('entry_price', 14, 2).notNullable();
    table.decimal('current_price', 14, 2).notNullable();
    table.decimal('leverage', 5, 2).notNullable();
    table.decimal('liquidation_price', 14, 2).notNullable();
    table.decimal('collateral_amount', 20, 2).notNullable();
    table.decimal('borrowed_amount', 20, 2).notNullable();
    table.decimal('interest_rate', 6, 4).notNullable();
    table.timestamp('last_interest_applied').defaultTo(knex.fn.now());
    table.decimal('accrued_interest', 20, 2).defaultTo(0);
    table.enum('status', ['open', 'margin_call', 'liquidating', 'closed']).defaultTo('open');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('closed_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('margin_positions');
};
