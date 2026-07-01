import express from 'express';
import connectDB from './db/connect.js';
import router from './routers/projectRouter.js';

const app = express();

connectDB();
app.use(express.json());

// app.get('/', (req, res) => {
//   return res.send("Hello there");
// });

app.use('/projects/', router);

app.listen(3000, () => {
  console.log(`App is running at http://localhost:3000/`)
})