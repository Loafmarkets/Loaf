/**
 * Migration to create tokens table
 */
exports.up = function(knex) {
  return knex.schema.createTable('tokens', (table) => {
    table.increments('id').primary();
    table.integer('property_id').references('id').inTable('properties').onDelete('CASCADE').notNullable();
    table.string('symbol').notNullable().unique();
    table.string('name').notNullable();
    table.decimal('total_supply', 20, 2).notNullable();
    table.decimal('initial_price', 14, 2).notNullable();
    table.integer('decimals').defaultTo(2);
    table.enum('status', ['created', 'active', 'paused', 'delisted']).defaultTo('created');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tokens');
};
