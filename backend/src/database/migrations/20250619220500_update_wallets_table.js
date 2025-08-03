/**
 * Migration to update wallets table with missing currency column
 */
exports.up = function(knex) {
  return knex.schema.alterTable('wallets', (table) => {
    // Add currency column
    table.string('currency').defaultTo('USD');
    
    // Make token_id nullable
    table.integer('token_id').nullable().alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('wallets', (table) => {
    // Remove currency column
    table.dropColumn('currency');
    
    // Make token_id required again
    table.integer('token_id').notNullable().alter();
  });
};
