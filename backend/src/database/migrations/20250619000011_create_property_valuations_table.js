/**
 * Migration to create property_valuations table
 */
exports.up = function(knex) {
  return knex.schema.createTable('property_valuations', (table) => {
    table.increments('id').primary();
    table.integer('property_id').references('id').inTable('properties').onDelete('CASCADE').notNullable();
    table.decimal('valuation', 14, 2).notNullable();
    table.string('valuation_method');
    table.text('valuation_notes');
    table.integer('created_by').references('id').inTable('users').onDelete('SET NULL');
    table.timestamp('valuation_date').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    
    // Index for faster queries
    table.index(['property_id', 'valuation_date']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('property_valuations');
};
