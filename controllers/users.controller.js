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
const getUserByUsername = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM Usuarios where username = ?",
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
        "INSERT INTO Usuarios (username, correo, contraseña, EstadisticaODS) VALUES (?, ?, ?, '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0')",
        [username, correo, contraseña]
        );
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "1" });
    } catch (error) {
      return res.status(500).json({ message: "-1" });
    }
  };

  const setPoints = async (req, res) => {
    try {
      const { id } = req.params;
      const [correo, puntosAcumuladosUser] = id.split(";");
      const [rows] = await db.pool.query(
        "UPDATE Usuarios SET puntosAcumuladosUser = ? WHERE correo = ?",
        [puntosAcumuladosUser, correo]
        );
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "1" });
    } catch (error) {
      return res.status(500).json({ message: "-1" });
    }
  }; 

  const setODS = async (req, res) => {
    try {
      const { id } = req.params;
      var values = id.split(';');

      // Store the first value in "correo" variable
      var correo = values[0];

      // Join the remaining values into a single string
      var remainingValues = values.slice(1).join(';');

      const [rows] = await db.pool.query(
        "UPDATE Usuarios SET EstadisticaODS = ? WHERE correo = ?",
        [remainingValues, correo]
        );
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json({ message: "1" });
    } catch (error) {
      return res.status(500).json({ message: "-1" });
    }
  }; 

module.exports = {
    getAllUsers,
  getUserByMail,
  registerUser,
  getUserByUsername,
  setPoints,
  setODS
};
