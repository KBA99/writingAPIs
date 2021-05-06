import express from 'express'

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24
  }
]

const router = express.Router()

router.get('/', (req, res) => {
  console.log(users)
  res.send(users)
});

router.post('/', (req, res) => {

});

export default router;