import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/niryon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//using mongoose 
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// getting the data for product id with local server
// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find((x) => x._id === req.params.id);
//     if (product) {
//         res.send(product);
//     } else {
//         res.status(404).send({ message: 'המוצר לא נמצא' });
//     }
// });

//using local server - users and products

// app.get('/api/users', (req,res) => {
//     res.send(data.users);
// });

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

app.get('/', (req, res) => {
    res.send('שרת מוכן');
});

//error catcher for the router
app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});