import { pool } from "../db.js";

export const getCountries = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM t_pais');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getCountry = async (req, res) => {
  try {
    const { paiid } = req.params;
    const [rows] = await pool.query('SELECT * FROM t_pais WHERE paiid = ?', [
      paiid,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteCountry = async (req, res) => {
  try {
    const { paiid } = req.params;
    const [rows] = await pool.query("DELETE FROM t_pais WHERE paiid = ?", [paiid]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const createCountry = async (req, res) => {
  try {
    
    const { paicod, painom } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO t_pais (paicod, painom) VALUES (?, ?)",
      [paicod, painom]
    );
    res.status(201).json({ id: rows.insertId, paicod, painom});
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateCountry = async (req, res) => {
  try {
    const { paiid } = req.params;
    const { paicod, painom } = req.body;

    const [result] = await pool.query(
      "UPDATE t_pais SET paicod = IFNULL(?, paicod), painom = IFNULL(?, painom) WHERE paiid = ?",
      [paicod, painom, paiid]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Country not found" });

    const [rows] = await pool.query("SELECT * FROM t_pais WHERE paiid = ?", [
      paiid,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
