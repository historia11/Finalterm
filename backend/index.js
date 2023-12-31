import express from 'express';
import {router} from './src/routes/router.js';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 4000;

dotenv.config();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'API is running'
  });
});
app.use(cors());
app.use('/api', router);

app.use((err, res) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
})