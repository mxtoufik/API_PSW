// Conexion a la BD
const db = require("../database/database");

const getQuestions = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM preguntas");
    json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM preguntas where id_pregunta = ?",
      [id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

module.exports = {
  getQuestions,
  getQuestion,
};
