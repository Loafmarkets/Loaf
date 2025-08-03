/**
 * Migration to create wallets table
 */
exports.up = function(knex) {
  return knex.schema.createTable('wallets', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.integer('token_id').references('id').inTable('tokens').onDelete('CASCADE').notNullable();
    table.decimal('balance', 20, 2).defaultTo(0).notNullable();
    table.decimal('locked_balance', 20, 2).defaultTo(0).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
    // Unique constraint to prevent multiple wallets for the same user and token
    table.unique(['user_id', 'token_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('wallets');
};
