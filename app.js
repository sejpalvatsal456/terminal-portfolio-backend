import express from 'express';
import connectDB from './db/connect.js';
import router from './routers/projectRouter.js';
import cors from 'cors';

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   return res.send("Hello there");
// });

app.use('/projects/', router);

app.listen(3000, () => {
  console.log(`App is running at http://localhost:3000/`)
})