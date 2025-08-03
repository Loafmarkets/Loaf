/**
 * Migration to create properties table
 */
exports.up = function(knex) {
  return knex.schema.createTable('properties', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('country').notNullable();
    table.string('zip_code');
    table.decimal('square_feet', 12, 2);
    table.integer('bedrooms');
    table.integer('bathrooms');
    table.integer('year_built');
    table.string('property_type').notNullable();
    table.decimal('valuation', 14, 2);
    table.jsonb('features').defaultTo('{}');
    table.jsonb('images').defaultTo('[]');
    table.enum('status', ['pending', 'active', 'tokenized', 'sold']).defaultTo('pending');
    table.integer('created_by').references('id').inTable('users').onDelete('SET NULL');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('properties');
};
