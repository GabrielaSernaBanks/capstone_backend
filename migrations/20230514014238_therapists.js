/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('therapists', (table) => {
    table.uuid('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('license_number').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('hashed_password').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
