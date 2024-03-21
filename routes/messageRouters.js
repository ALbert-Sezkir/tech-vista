import express from 'express';
import createMessage  from './controllers/messageController.js';

const app = express();

app.use(express.json()); // This middleware is needed to parse JSON request bodies

app.post('/message', createMessage);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});