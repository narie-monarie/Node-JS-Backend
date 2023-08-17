import { Router } from "express";

const router = Router();
//user CRUD Content

//create Tweet
router.post('/', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})

//list of Tweets
router.get('/', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})

//get one Tweet
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.status(501).json({ error: `Not Implemented: ${id}` })
})

//update Tweet
router.put('/:id', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})

//delete Tweet
router.delete('/:id', (req, res) => {
  res.status(501).json({ error: "Not Implemented" })
})
export default router
