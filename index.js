import express from "express";
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/node-rest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('Connected to Database'))
const app = express();

import userRoutes from './routes/user.js'

const PORT = 5000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send("Hello from homepage")
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))