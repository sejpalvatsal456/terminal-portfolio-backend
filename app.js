import express from 'express';
import connectDB from './db/connect.js';
import router from './routers/projectRouter.js';
import cors from 'cors';
import { Project } from './db/model.js';

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   return res.send("Hello there");
// });

// Test endpoints

app.get("/test/", async(req, res) => {

  // Get the project count
  const projects = await Project.find();

  return res.json({
    msg: "ok",
    projects: {
      count: projects.length,
      data: projects,
    }
  });
});

app.use('/projects/', router);

app.listen(3000, () => {
  console.log(`App is running at http://localhost:3000/`)
})