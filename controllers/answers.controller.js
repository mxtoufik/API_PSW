// Conexion a la BD
const db = require("../database/database");

const getAnswer1 = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Respuestas WHERE pregunta = ?",
      [id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

module.exports = {
  getAnswer1,
};
