"use server";
const { Pool } = require("pg");
import "dotenv/config";

export default async function runQuery(query, values) {
  const connectionString = process.env.uri;
  const pool = new Pool({
    connectionString: connectionString,
  });

  try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    console.log("Query executed successfully:\n", query, values);
    console.log(result.rows);
    return result.rows[0];
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

export async function runQueryAll(query, values) {
  const connectionString = process.env.uri;
  const pool = new Pool({
    connectionString: connectionString,
  });

  try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    console.log("Query executed successfully:\n", query, values);
    return result.rows;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}