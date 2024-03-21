import express from 'express';
import dbConnect from './server.js';
import { createMessage } from './controllers/messageController.js';





const app = express(); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));
dbConnect()



app.use(express.json());
app.use(express.urlencoded({extended: false}));



// Routes
app.use('/api/products');

app.use(express.json()); // This middleware is needed to parse JSON request bodies
app.use(express.urlencoded({extended: false}));

app.post('/message', createMessage);






export default app;
