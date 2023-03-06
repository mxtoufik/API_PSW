// Conexion a la BD
const db = require("../database/database");

const getParticipantes = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM participante");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getParticipante = async (req, res) => {
  try {
    const { usuario } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM participante WHERE usuario LIKE ?",
      [usuario]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Participante no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

module.exports = {
  getParticipantes,
  getParticipante,
};
