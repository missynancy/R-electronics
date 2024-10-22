import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router()
router.use(express.json());

// routes
router.get<{}, any>('/', async (req, res) =>{
    res.json({ message: 'laptops api' })
})


export default router