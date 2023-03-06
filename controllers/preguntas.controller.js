// Conexion a la BD
const db = require("../database/database");

const getPreguntas = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM preguntas");
    res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getPregunta = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM preguntas where id_pregunta = ?",
      [id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

module.exports = {
  getPreguntas,
  getPregunta,
};
