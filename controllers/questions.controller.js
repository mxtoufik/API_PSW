// Conexion a la BD
const db = require("../database/database");

const getQuestions = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM Preguntas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getQuestion1 = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Preguntas where dificultad = ?",
      [id]
      );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

module.exports = {
  getQuestions,
  getQuestion1,
};
