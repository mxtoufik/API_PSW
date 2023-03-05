// import { getConnection as db } from "../database.js";

const ping = (req, res) => res.send("pong");

const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = {
  ping,
  getUsers,
};
