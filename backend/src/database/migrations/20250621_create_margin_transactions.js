/**
 * Migration to create margin_transactions table
 */
exports.up = function(knex) {
  return knex.schema.createTable('margin_transactions', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.integer('margin_account_id').references('id').inTable('margin_accounts').onDelete('CASCADE').notNullable();
    table.integer('margin_position_id').references('id').inTable('margin_positions').onDelete('SET NULL');
    table.enum('type', [
      'deposit_collateral', 
      'withdraw_collateral', 
      'borrow', 
      'repay', 
      'interest_charged',
      'open_position',
      'close_position',
      'liquidation',
      'margin_call'
    ]).notNullable();
    table.decimal('amount', 20, 2).notNullable();
    table.decimal('fee', 14, 2).defaultTo(0);
    table.jsonb('metadata').defaultTo('{}');
    table.enum('status', ['pending', 'completed', 'failed', 'cancelled']).defaultTo('completed');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('margin_transactions');
};
