/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	//   CREATE TABLE "session" (
	//   "sid" varchar NOT NULL COLLATE "default",
	//   "sess" json NOT NULL,
	//   "expire" timestamp(6) NOT NULL
	// )
	return knex.schema.createTable("session", function (table) {
		table.string("sid").notNullable().primary();
		table.json("sess").notNullable();
		table.timestamp("expire").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("session");
};
