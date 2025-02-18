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
    
    const randomItems = [];
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * rows.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        randomItems.push(rows[randomIndex]);
      }
    }

    res.json(randomItems);
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

const getQuestionsByIds = async (req, res) => {
  try {
    const { ids } = req.params;
    const idArray = ids.split(",");
    const [rows] = await db.pool.query(
      "SELECT * FROM Preguntas WHERE id IN (?)",
      [idArray]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Preguntas no encontradas" });
    }
    res.json(rows);
  } catch (error) {
    console.error(error);
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
  getQuestionsByIds,
};
