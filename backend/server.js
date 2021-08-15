import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect('mongodb://localhost/niryon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'המוצר לא נמצא' });
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

//using mongoose 
app.use('/api/users', userRouter);

//using local server

// app.get('/api/users', (req,res) => {
//     res.send(data.users);
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