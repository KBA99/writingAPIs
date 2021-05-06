import express from "express";

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