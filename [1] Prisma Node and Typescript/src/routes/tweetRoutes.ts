import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();
//user CRUD Content

//create Tweet
router.post('/', async (req, res) => {
  const { content, image, userId } = req.body
  try {
    const result = await prisma.tweet.create({
      data: {
        content,
        image,
        userId
      }
    })
    res.json(result)
  } catch (e) {
    res.status(400).json({ error: "cannot create tweet" })
  }
})

//list of all  Tweets
router.get('/', async (req, res) => {
  const result = await prisma.tweet.findMany({
    include: {
      User: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        }
      }
    },
  })
  res.json(result)
})

//get one Tweet
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await prisma.tweet.findUnique({
    where: { id: Number(id) },
    include: { User: true }
  }
  )
  res.json(result)
})

//update Tweet
router.put('/:id', async (req, res) => {
  const { id } = req.params

  const { content, image } = req.body
  try {
    const result = await prisma.tweet.update({
      where: { id: Number(id) },
      data: {
        content,
        image
      }
    })
    res.json(result)
  } catch (e) {
    res.status(400).json({ error: "Failed To update Tweet" })
  }
})

//delete Tweet
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await prisma.tweet.delete({ where: { id: Number(id) } })
  res.status(200).json({ message: "Deleted" })
})
export default router
