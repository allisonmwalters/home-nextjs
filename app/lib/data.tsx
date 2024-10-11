import { createClient } from '@vercel/postgres';

export async function connectToDb() {
    const client = createClient();
    await client.connect();

    try {
        if (client) {
            console.log('Connected to database');
            return client;
        }
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}