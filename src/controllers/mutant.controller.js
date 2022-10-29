import { pool } from "../db.js";

export const getMutants = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT mut.mutid ,mut.mutactivo, mut.mutapodo, mut.mutnom, rol.rolafinidad AS "rolid", CONCAT(veh.vehnom," (",veh.vehcodigo,")") AS "vehid",con.connom AS "conid", CONCAT(pai.painom," (",pai.paicod,")") AS "paiid", GROUP_CONCAT(pod.podtipo) AS "podmutid", mut.mutimg   FROM  t_mutantes AS mut  LEFT JOIN t_rol AS rol ON mut.rolid = rol.rolid  LEFT JOIN t_vehiculo AS veh ON mut.vehid = veh.vehid  LEFT JOIN t_condicion AS con ON mut.conid = con.conid  LEFT JOIN t_pais AS pai ON mut.paiid = pai.paiid  left join  t_poder_mutante AS pmu ON mut.mutid = pmu.mutid left join t_poder AS pod ON pmu.podid = pod.podid GROUP BY mut.mutid ORDER BY mut.mutid ASC ');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getMutant = async (req, res) => {
  try {
    const { mutid } = req.params;
    const [rows] = await pool.query('SELECT mut.mutid ,mut.mutactivo, mut.mutapodo, mut.mutnom, rol.rolafinidad AS "rolid", CONCAT(veh.vehnom," (",veh.vehcodigo,")") AS "vehid",con.connom AS "conid", CONCAT(pai.painom," (",pai.paicod,")") AS "paiid", GROUP_CONCAT(pod.podtipo) AS "podmutid", mut.mutimg   FROM  t_mutantes AS mut  LEFT JOIN t_rol AS rol ON mut.rolid = rol.rolid  LEFT JOIN t_vehiculo AS veh ON mut.vehid = veh.vehid  LEFT JOIN t_condicion AS con ON mut.conid = con.conid  LEFT JOIN t_pais AS pai ON mut.paiid = pai.paiid  left join  t_poder_mutante AS pmu ON mut.mutid = pmu.mutid left join t_poder AS pod ON pmu.podid = pod.podid  WHERE mut.mutid = ?   GROUP BY mut.mutid ', [
      mutid,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Mutant not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteMutant = async (req, res) => {
  try {
    const { mutid } = req.params;
    const [rows] = await pool.query("DELETE FROM t_mutantes WHERE mutid = ?", [mutid]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Mutant not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const createMutant = async (req, res) => {
  try {
    
    const { mutnom, mutapodo, mutactivo, conid, rolid, vehid, paiid , mutimg} = req.body;
    const [rows] = await pool.query(
      "INSERT INTO t_mutantes (mutnom, mutapodo, mutactivo, conid, rolid, vehid, paiid , mutimg) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [mutnom, mutapodo, mutactivo, conid, rolid, vehid, paiid , mutimg]
    );
    res.status(201).json({ id: rows.insertId, mutnom, mutapodo, mutactivo, conid, rolid, vehid, paiid , mutimg });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateMutant = async (req, res) => {
  try {
    const { mutid } = req.params;
    const { mutnom, mutapodo, mutactivo, conid, rolid, vehid, paiid , mutimg } = req.body;

    const [result] = await pool.query(
      "UPDATE t_mutantes SET mutnom = IFNULL(?, mutnom), mutapodo = IFNULL(?, mutapodo), mutactivo = IFNULL(?, mutactivo), conid = IFNULL(?, conid), rolid = IFNULL(?, rolid), vehid = IFNULL(?, vehid), paiid = IFNULL(?, paiid), mutimg = IFNULL(?, mutimg) WHERE mutid = ?",
      [mutnom, mutapodo, mutactivo, conid, rolid, vehid, paiid , mutimg, mutid]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Mutant not found" });

    const [rows] = await pool.query("SELECT * FROM t_mutantes WHERE mutid = ?", [
      mutid,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deadMutant = async (req, res) => {
    try {
      const { mutid } = req.params;
      const [rows] = await pool.query("UPDATE t_mutantes SET mutactivo = IFNULL(0, mutactivo) WHERE mutid = ?", [mutid]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Mutant not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
  export const survivedMutant = async (req, res) => {
    try {
      const { mutid } = req.params;
      const [rows] = await pool.query("UPDATE t_mutantes SET mutactivo = IFNULL(1, mutactivo) WHERE mutid = ?", [mutid]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Mutant not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

