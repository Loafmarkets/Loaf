/**
 * Migration to create ipo_subscriptions table
 */
exports.up = function(knex) {
  return knex.schema.createTable('ipo_subscriptions', (table) => {
    table.increments('id').primary();
    table.integer('ipo_id').references('id').inTable('ipos').onDelete('CASCADE').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.decimal('token_amount', 20, 2).notNullable();
    table.decimal('price_per_token', 14, 2).notNullable();
    table.decimal('total_price', 14, 2).notNullable();
    table.decimal('allocated_tokens', 20, 2);
    table.enum('status', ['pending', 'completed', 'rejected']).defaultTo('pending');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
    // Unique constraint to prevent multiple subscriptions from the same user to the same IPO
    table.unique(['ipo_id', 'user_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ipo_subscriptions');
};
