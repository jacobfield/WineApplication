import pg from "pg";

const databaseUrl = process.env.databaseUrl;

if (undefined === databaseUrl) {
  throw new Error(
    "Issue with database URL. Please check .env file is correct, and that (databaseUrl) is defined."
  );
}

export const pool = new pg.Pool({
  connectionString: databaseUrl,
});
