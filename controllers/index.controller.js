const db = require("../database");
const ping = (req, res) => res.send("pong");

const getUsers = async (req, res) => {
  const [rows] = await db.pool.query("SELECT * FROM participante");
  res.json(rows);
};

module.exports = {
  ping,
  getUsers,
};
