"use server";

import runQuery, { runQueryAll } from "../dbquery";

async function getProblem(req) {
  try {
    const data = await runQuery(
      `SELECT * FROM questions where question_id=${req}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getAllProblems() {
  try {
    const data = await runQueryAll(
      `SELECT * FROM questions`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getSubmission(req) {
  try {
    const data = await runQuery(`SELECT * FROM submissions where id='${req}'`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getProblem, getSubmission, getAllProblems };
