import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("merchants").del();
    // Inserts seed entries
    await knex("merchants").insert([
        { id: 1, display_name: "Shop", icon_url: 'url', funny_gif_url: 'funny_gif_url' },
        { id: 2, display_name: "Larek", icon_url: 'url', funny_gif_url: 'funny_gif_url' },
    ]);
};
