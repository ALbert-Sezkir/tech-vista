import {Schema, model} from 'mongoose'

const productSchema = Schema({  
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    images: ["image1.jpg"]
    


}, {timestamps: true} )

const Product = model('Product', productSchema) 

export default Product;
 