import express from "express";

// Routes
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Midlewares
app.use(express.json());

// Routes
app.use(indexRoutes);

app.listen(3000);
