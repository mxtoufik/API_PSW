const express = require("express");

// Routes
const indexRoutes = require("./routes/index.routes");

const app = express();

// Midlewares
app.use(express.json());

// Routes
app.use(indexRoutes);

app.listen(3000);
