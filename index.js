const express = require("express");

// Routess
const indexRoutes = require("./routes/index.routes");
const respuestasRoutes = require("./routes/answers.router");
const preguntasRoutes = require("./routes/questions.router");

const app = express();

// Midlewares
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/respuestas", respuestasRoutes);
app.use("/preguntas", preguntasRoutes);

app.listen(3000);
