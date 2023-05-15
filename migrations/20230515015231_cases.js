/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('cases', (table) => {
    table.uuid('case_id').primary();
    table.string('school_name').notNullable();
    table.string('school_address').notNullable();
    table.integer('student_id').notNullable();
    table.string('student_dob').notNullable();
    table.integer('student_grade').notNullable();
    table.string('type').notNullable();
    table.string('therapist_id');
    table.string('date_posted').notNullable();
    table.string('status').notNullable();
  
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
