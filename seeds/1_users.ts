import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("transactions").del();
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, first_name: "Mike", last_name: 'Shinoda' },
        { id: 2, first_name: "Alex", last_name: 'Alkhutov' }
    ]);
};
