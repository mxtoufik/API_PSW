// Conexion a la BD
const db = require("../database/database");

const getAnswer1 = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Respuestas r WHERE EXISTS(SELECT * FROM Preguntas p WHERE dificultad = 1 AND p.id = r.pregunta)",
      [id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }
    json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

module.exports = {
  getAnswer1,
};
