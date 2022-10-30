import { pool } from "../db.js";

export const getPowers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM t_poder ORDER BY podtipo ASC');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getPower = async (req, res) => {
  try {
    const { podid } = req.params;
    const [rows] = await pool.query('SELECT * FROM t_poder WHERE podid = ?', [
      podid,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Power not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deletePower = async (req, res) => {
  try {
    const { mutid } = req.params;
    const [rows] = await pool.query("DELETE FROM t_poder_mutante WHERE mutid = ?", [mutid]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Power not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const createPower = async (req, res) => {
  try {
    
    const { podid, mutid} = req.body;
    const [rows] = await pool.query(
      "INSERT INTO t_poder_mutante (podid, mutid) VALUES (?, ?)",
      [podid, mutid]
    );
    res.status(201).json({ id: rows.insertId, podtipo, poddescripcion});
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updatePower = async (req, res) => {
  try {
    const { podid } = req.params;
    const { podtipo, poddescripcion} = req.body;

    const [result] = await pool.query(
      "UPDATE t_poder SET podtipo = IFNULL(?, podtipo), poddescripcion = IFNULL(?, poddescripcion) WHERE podid = ?",
      [podtipo, poddescripcion, podid]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Power not found" });

    const [rows] = await pool.query("SELECT * FROM t_poder WHERE podid = ?", [
      podid,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createPowerMutant = async (req, res) => {
  try {
    
    const { podid, mutid} = req.body;
    const [rows] = await pool.query(
      "INSERT INTO t_poder_mutante (podid, mutid) VALUES (?, ?)",
      [podid, mutid]
    );
    res.status(201).json({ id: rows.insertId, podid, mutid});
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

