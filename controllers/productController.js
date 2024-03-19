import Product from '../models/productModel.js'



/*
POST /api/products 
Creates a new todo 
public
*/


/**
 * @description Creates a new product and saves it to the database  
 */
export const createProduct = async (req, res) => {
    try {
    //const { productName} = req.body;  // istället för title, ??döp den till Product ?? 

    const { name, price, description, category, images } = req.body; // istället för title 

        if(!name || !price || !description || !category || !images) { // istället för title 
            res.status(400);
            throw new Error('All product fields are required');
        }
 
        const newProduct = await Product.create({
            name,
            price,
            description,
            category,
            images
            
        });

        // if(!newProduct){
        //     res.status(500);
        //     throw new Error('Something went wrong when creating the product');
        // }

        res.status(201).json(newProduct);
}
catch(err){
    res.status(500).json({ error: err.message })
}
    
}


/**
 * @description Get all products from the database  
 */

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find()  //products istället för todos
        res.status(201).json(products)
    }// ger tillbaka en array med resultat av vad den hittar.
    
    catch(err){
        res.json({
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null}) // Något fel här?


    
}}


/**
 * @description Takes an id and Updates product on the database  
 */

export const updateProduct = async (req, res) => {
    res.status(200).json({message: 'Update'})
}


/**
 * @description Takes an id and Deletes product on the database  
 */

export const deleteProduct = async (req, res) => {
    res.status(200).json({message: 'Delete'})
}

