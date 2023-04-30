/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("users", function (table) {
			table.increments();
			table.string("username").notNullable();
			table.string("name").notNullable();
			table.integer("github_id").notNullable();
		})
		.createTable("history", function (table) {
			table.increments();
			table.string("input").notNullable();
			table.string("output").notNullable();
			table.integer("user_id").references("id").inTable("users");
			table.timestamp("timestamp").notNullable().defaultTo(knex.fn.now());
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("users").dropTable("history");
};
