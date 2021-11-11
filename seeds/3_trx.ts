import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("transactions").del();

    // Inserts seed entries
    await knex("transactions").insert([
        { id: 1, merchant_id: 1, date: '2021-11-03', amount: 1, user_id: 1 },
        { id: 2, merchant_id: 2, date: '2021-11-04', amount: 3, user_id: 2 },
        { id: 3, merchant_id: 1, date: '2021-11-05', amount: 2, user_id: 1 },
        { id: 4, merchant_id: 2, date: '2021-11-06', amount: 5, user_id: 2 },
        { id: 5, merchant_id: 1, date: '2021-11-08', amount: 8, user_id: 1 },
    ]);
};
