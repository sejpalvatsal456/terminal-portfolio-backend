import express from 'express';
import connectDB from './db/connect.js';
import router from './routers/projectRouter.js';
import cors from 'cors';
import { Project } from './db/model.js';
import mongoose from 'mongoose';

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   return res.send("Hello there");
// });

// Test endpoints

app.get("/health", async(req, res) => {

  // Get the status
  const dbStatus = mongoose.connection.readyState ? "OK": "NOT OK";

  return res.json({
    serverStatus: "ok",
    dbStatus,
  });
});

app.use('/projects/', router);

app.listen(3000, () => {
  console.log(`App is running at http://localhost:3000/`)
})