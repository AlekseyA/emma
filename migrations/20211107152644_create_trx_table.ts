import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('transactions', function(table) {
    table.increments();

    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id');
    
    table.integer('merchant_id').unsigned()
    table.foreign('merchant_id').references('merchants.id')
    table.timestamp('date').defaultTo(knex.fn.now());
    table.integer('amount').defaultTo(0);
    table.string('description');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('transactions');
}
