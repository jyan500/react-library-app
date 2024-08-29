/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable("libraries", (table) => {
		table.increments("id").primary()
		table.string("name").notNullable()
		table.string("address").notNullable()
		table.string("city").notNullable()
		table.string("state").notNullable()
		table.string("zipcode").notNullable()
		table.string("image_url")
	 	table.timestamp('created_at').defaultTo(knex.fn.now());	
 		table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists("libraries") 
};
