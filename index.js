const express = require("express");

// Routes
const indexRoutes = require("./routes/index.routes");
const participantesRoutes = require("./routes/users.router");
const preguntasRoutes = require("./routes/questions.router");

const app = express();

// Midlewares
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/participantes", participantesRoutes);
app.use("/preguntas", preguntasRoutes);

app.listen(3000);
