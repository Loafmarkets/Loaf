/**
 * Migration to create users table
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.enum('role', ['user', 'admin']).defaultTo('user');
    table.boolean('email_verified').defaultTo(false);
    table.string('verification_token');
    table.string('reset_password_token');
    table.timestamp('reset_password_expires');
    table.jsonb('profile_data').defaultTo('{}');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
