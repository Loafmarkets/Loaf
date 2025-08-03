/**
 * Migration to create trades table
 */
exports.up = function(knex) {
  return knex.schema.createTable('trades', (table) => {
    table.increments('id').primary();
    table.integer('token_id').references('id').inTable('tokens').onDelete('CASCADE').notNullable();
    table.integer('buy_order_id').references('id').inTable('orders').onDelete('SET NULL');
    table.integer('sell_order_id').references('id').inTable('orders').onDelete('SET NULL');
    table.integer('buyer_id').references('id').inTable('users').onDelete('SET NULL');
    table.integer('seller_id').references('id').inTable('users').onDelete('SET NULL');
    table.decimal('amount', 20, 2).notNullable();
    table.decimal('price', 14, 2).notNullable();
    table.decimal('total_value', 14, 2).notNullable();
    table.timestamp('executed_at').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    
    // Indexes for faster queries
    table.index(['token_id', 'executed_at']);
    table.index(['buyer_id']);
    table.index(['seller_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('trades');
};
