import dotenv from 'dotenv';

dotenv.config();

export const {
    SERVER_PORT,
    DB_URL
} = process.env;