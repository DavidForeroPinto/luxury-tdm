import express from "express";
import cors from "cors";
import auth from './routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/auth", auth);

// Home
app.get("/", (req, res) => {
  res.send("API Cars Luxury funcionando 🚀");
});

app.listen(3001, () => {
  console.log("Servidor backend en http://localhost:3001");
});
