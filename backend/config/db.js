import mongoose from 'mongoose';

export const connectDB= async () => {
    await mongoose.connect('mongodb+srv://salinasmj916:09062050588@cluster0.ebqjymo.mongodb.net/food-delivery').then(()=>console.log("Database Connected!"));
}