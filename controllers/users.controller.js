// Conexion a la BD
const db = require("../database/database");

const getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM Usuarios");
    if (rows.length <= 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const getUserByMail = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Usuarios where correo = ?",
      [id]
      );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const registerUser = async (req, res) => {
    try {
      const { id } = req.params;
      const [username, correo, contraseña] = id.split(";");
      const [rows] = await db.pool.query(
        "INSERT INTO Usuarios (username, correo, contraseña) VALUES (?, ?, ?)",
        [username, correo, contraseña]
        );
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Algo ha ido mal" });
    }
  };

module.exports = {
    getAllUsers,
  getUserByMail,
  registerUser
};
