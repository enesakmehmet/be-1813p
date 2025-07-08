export const up = async (knex) => {
    await knex.schema.createTable('ingredients', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.boolean('is_allergen').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable();
      table.timestamp('deleted_at').notNullable();
    });
  };
  
  export const down = async (knex) => {
    await knex.schema.dropTable('ingredients');
  };