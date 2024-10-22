import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();
router.use(express.json());


interface formData{
    name: string
    id: string
    category: string
}


router.get<formData, any>('/category', async (req, res) =>{
    const { categoryName } = req.query; 
    const laptops = await prisma.product.findMany({ where: 
        {
            categoryName: String(categoryName)
        }});
    res.send(laptops)
})

router.post<{}, any>('/add/product', async (req, res) => {
    const { name, cost, description, image ,categoryName } = req.body;
    try {
        // Ensure the category exists before linking the product
        const category = await prisma.category.findUnique({
            where: {
                name: categoryName
            }
        });

        if (!category) {
            return res.status(404).json({ error: `Category ${categoryName} not found` });
        }

        // Create the new product
        const product = await prisma.product.create({
            data: {
                name,
                cost,
                description,
                image,
                categoryName,
            }
        });
        res.status(201).json(product);

    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Product creation failed' });
    }
});

router.post<{}, any>('/add/category', async (req, res) =>{
    const { name } = req.body

    try {
        const category = await prisma.category.create(
            {
                data: { name }
            }
        )
        res.status(201).json(category)
    } catch (err) {
        res.status(500).json({ error: 'action add category Fail'})
    }
})

router.get<{}, any>('/all/cat', async (req, res) => {

    prisma.category.findMany().then( categories => {
        if(!categories){
            return res.status(404).json({ message: 'categories not found'})
        }
        return res.status(500).send(categories)
    }). catch( error => {
        return res.status(500).json({ message: 'Internal Server Errro', error: error.message })
    })
})


router.get<{}, any>("/all/products", async (req, res) => {

    prisma.product.findMany().then( products => {
        if (!products){
            return res.status(404).json({ message: 'Products not found' })
        } 
        return res.send(products)
    }).catch (error => {
        return res.status(500).json({ message: 'Internal server error', error: error.message})
    })
})


router.post<{}, any>("/contact", async (req, res) => {
    
    const {  customerName, message, contactInfo } = req.body

    prisma.contact.create({
        data: {
            customerName,
            message, 
            contactInfo,
        }
    }).then ( contact => {
        return res.send(contact)

    }).catch( error => {
        return res.json({ message: "message failed to send"})
    })
})

export default router;
