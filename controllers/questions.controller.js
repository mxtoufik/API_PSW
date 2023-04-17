// Conexion a la BD
const db = require("../database/database");

const getAllQuestions = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM Preguntas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Preguntas where id = ?",
      [id]
      );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getQuestionByDifficulty = async (req, res) => {
  try {
    const { dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Preguntas where dificultad = ?",
      [dif]
      );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getQuestionByPoints = async (req, res) => {
  try {
    const { point } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Preguntas where puntos = ?",
      [point]
      );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getCountOfDifficulty = async (req, res) => {
  try {
    const { dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT Count(*) FROM Preguntas where dificultad = ?",
      [dif]
      );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getIdOfDifficulty = async (req, res) => {
  try {
    const { dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT id FROM Preguntas where dificultad = ?",
      [dif]
      );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Pregunta no encontrada" });
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  getQuestionByDifficulty,
  getQuestionByPoints,
  getCountOfDifficulty,
  getIdOfDifficulty,
};
