export const up = async (knex) => {
    await knex.schema.createTable('products', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.decimal('price', 10, 2).notNullable();
      table.integer('category_id').references('id').inTable('categories').onDelete('CASCADE').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable();
      table.timestamp('deleted_at').notNullable();
    });
  };
  
  export const down = async (knex) => {
    await knex.schema.dropTable('products');
  };