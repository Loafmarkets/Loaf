/**
 * Migration to create orders table
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.integer('token_id').references('id').inTable('tokens').onDelete('CASCADE').notNullable();
    table.enum('type', ['buy', 'sell']).notNullable();
    table.decimal('amount', 20, 2).notNullable();
    table.decimal('price', 14, 2).notNullable();
    table.decimal('filled_amount', 20, 2).defaultTo(0).notNullable();
    table.enum('status', ['open', 'filled', 'partially_filled', 'cancelled']).defaultTo('open');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
    // Indexes for faster queries
    table.index(['token_id', 'type', 'status']);
    table.index(['user_id', 'status']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
