/**
 * Migration to update properties table with missing columns needed for seed data
 */
exports.up = function(knex) {
  return knex.schema.alterTable('properties', (table) => {
    // Add missing columns from seed data
    table.decimal('cap_rate', 5, 2);
    table.decimal('purchase_price', 14, 2);
    table.decimal('current_value', 14, 2);
    table.decimal('rental_income', 14, 2);
    table.decimal('expenses', 14, 2);
    table.decimal('net_income', 14, 2);
    
    // Make some columns nullable that were previously required
    table.string('city').nullable().alter();
    table.string('state').nullable().alter();
    table.string('country').nullable().alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('properties', (table) => {
    // Remove added columns
    table.dropColumn('cap_rate');
    table.dropColumn('purchase_price');
    table.dropColumn('current_value');
    table.dropColumn('rental_income');
    table.dropColumn('expenses');
    table.dropColumn('net_income');
    
    // Restore required columns
    table.string('city').notNullable().alter();
    table.string('state').notNullable().alter();
    table.string('country').notNullable().alter();
  });
};
