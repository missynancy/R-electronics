import express from 'express';
import laptops from './laptops';

const router = express.Router();
router.use(express.json());


// routes
router.use('/laptops', laptops)


export default router;
