import config from "config";

import dotenvFlow from "dotenv-flow";

dotenvFlow.config();
const PORT = config.get("server.port");

// console.log(process.env)

export const Config: {
    ENV: string;
    PORT: number;
    SERVER_URL: string;
    DATABASE_URL: string;
} = {
    // General
    ENV: process.env.ENV as string,
    PORT: PORT as number,
    SERVER_URL: process.env.SERVER_URL as string,
    // Database
    DATABASE_URL: process.env.DATABASE_URL as string
};

