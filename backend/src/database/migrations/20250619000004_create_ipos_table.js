/**
 * Migration to create ipos table
 */
exports.up = function(knex) {
  return knex.schema.createTable('ipos', (table) => {
    table.increments('id').primary();
    table.integer('property_id').references('id').inTable('properties').onDelete('CASCADE').notNullable();
    table.integer('token_id').references('id').inTable('tokens').onDelete('CASCADE').notNullable();
    table.string('title').notNullable();
    table.text('description');
    table.decimal('guide_price', 14, 2).notNullable();
    table.decimal('total_tokens', 20, 2).notNullable();
    table.decimal('tokens_for_sale', 20, 2).notNullable();
    table.decimal('min_investment', 14, 2).notNullable();
    table.decimal('max_investment_per_user', 14, 2);
    table.timestamp('start_date').notNullable();
    table.timestamp('end_date').notNullable();
    table.enum('status', ['pending', 'active', 'completed', 'cancelled']).defaultTo('pending');
    table.decimal('final_allocation_ratio', 10, 6);
    table.decimal('total_subscribed', 20, 2);
    table.integer('created_by').references('id').inTable('users').onDelete('SET NULL');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ipos');
};
