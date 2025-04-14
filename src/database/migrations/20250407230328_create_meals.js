const { Knex } = require("knex");

/**
 * @param { import("knex").Knex } Knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.text('description');
    table.datetime('date').notNullable();
    table.boolean('is_on_diet').notNullable();
    table.uuid('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return Knex.schema.dropTable('meals');
};
