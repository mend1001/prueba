import { pool } from "../db.js";

export const getVehicles = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM t_vehiculo');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getVehicle = async (req, res) => {
  try {
    const { vehid } = req.params;
    const [rows] = await pool.query('SELECT * FROM t_vehiculo WHERE veh.vehid = ? ', [
      vehid,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const { vehid } = req.params;
    const [rows] = await pool.query("DELETE FROM t_vehiculo WHERE vehid = ?", [vehid]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const createVehicle = async (req, res) => {
  try {
    
    const { vehnom, vehdescripcion, vehcodigo, vehimg, vehactivo } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO t_vehiculo (vehnom, vehdescripcion, vehcodigo, vehimg, vehactivo) VALUES (?, ?, ?, ?, ?)",
      [vehnom, vehdescripcion, vehcodigo, vehimg, vehactivo]
    );
    res.status(201).json({ id: rows.insertId, vehnom, vehdescripcion, vehcodigo, vehimg, vehactivo});
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const { vehid } = req.params;
    const { vehnom, vehdescripcion, vehcodigo, vehimg, vehactivo} = req.body;

    const [result] = await pool.query(
      "UPDATE t_vehiculo SET vehnom = IFNULL(?, vehnom), vehdescripcion = IFNULL(?, vehdescripcion), vehcodigo = IFNULL(?, vehcodigo),vehimg = IFNULL(?, vehimg),vehactivo = IFNULL(?, vehactivo) WHERE vehid = ?",
      [vehnom, vehdescripcion, vehcodigo, vehimg, vehactivo, vehid]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Vehicle not found" });

    const [rows] = await pool.query("SELECT * FROM t_vehiclees WHERE vehid = ?", [
      vehid,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deadVehicle = async (req, res) => {
    try {
      const { vehid } = req.params;
      const [rows] = await pool.query("UPDATE t_vehiculo SET vehactivo = IFNULL(0, vehactivo) WHERE vehid = ?", [vehid]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
  export const survivedVehicle = async (req, res) => {
    try {
      const { vehid } = req.params;
      const [rows] = await pool.query("UPDATE t_vehiculo SET vehactivo = IFNULL(1, vehactivo) WHERE vehid = ?", [vehid]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

