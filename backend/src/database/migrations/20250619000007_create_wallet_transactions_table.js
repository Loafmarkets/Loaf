/**
 * Migration to create wallet_transactions table
 */
exports.up = function(knex) {
  return knex.schema.createTable('wallet_transactions', (table) => {
    table.increments('id').primary();
    table.integer('wallet_id').references('id').inTable('wallets').onDelete('CASCADE').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.integer('token_id').references('id').inTable('tokens').onDelete('CASCADE').notNullable();
    table.decimal('amount', 20, 2).notNullable();
    table.enum('type', ['deposit', 'withdrawal', 'trade', 'ipo_allocation']).notNullable();
    table.enum('status', ['pending', 'completed', 'failed']).defaultTo('completed');
    table.string('transaction_hash');
    table.text('notes');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('wallet_transactions');
};
