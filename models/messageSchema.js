
import {Schema, model} from 'mongoose'

const messageSchema = Schema({  
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    
}, {timestamps: true});

const messageProduct = model('messageProduct', messageSchema);

export default messageProduct;

