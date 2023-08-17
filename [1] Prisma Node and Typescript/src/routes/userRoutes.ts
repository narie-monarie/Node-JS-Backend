import { Router } from "express";

const router = Router();
//user CRUD Content

//create User
router.post('/', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})

//list of users
router.get('/', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})

//get one user
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.status(501).json({ error: `Not Implemented: ${id}` })
})

//update user
router.put('/:id', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})

//delete user
router.delete('/:id', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})
export default router;
