import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('merchants', function(table) {
    table.increments();
    table.string('display_name').notNullable();
    table.string('icon_url');
    table.string('funny_gif_url');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('merchants');
}

