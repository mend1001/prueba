import { pool } from "../db.js";

export const index = (req, res) => res.json({ message: "welcome to my App mutant" });

export const ping = async (req, res) => {
  const [result] = await pool.query('The link response');
  res.json(result[0]);
};
