import express from 'express';
import dbConnect from './server.js';
import productRoutes from './routes/productRoutes.js';
const app = express(); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));
dbConnect()



app.use(express.json());
app.use(express.urlencoded({extended: false}));



// Routes
app.use('/api/products', productRoutes );


export default app;