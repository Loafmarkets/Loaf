/**
 * Migration to create token_prices table
 */
exports.up = function(knex) {
  return knex.schema.createTable('token_prices', (table) => {
    table.increments('id').primary();
    table.integer('token_id').references('id').inTable('tokens').onDelete('CASCADE').notNullable();
    table.decimal('price', 14, 2).notNullable();
    table.timestamp('timestamp').notNullable();
    
    // Index for faster queries
    table.index(['token_id', 'timestamp']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('token_prices');
};
