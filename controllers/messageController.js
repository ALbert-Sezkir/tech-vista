import mongoose from 'mongoose';
import messageProduct from '../models/messageSchema.js'

export const createMessage = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ message: 'Name, email, and message are required' });
    } else {
        res.status(200).json({ message: 'Message received' });
    }
};