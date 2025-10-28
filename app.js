import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

const orders = [];

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.sendFile(`${import.meta.dirname}/views/home.html`);
    res.render('home');
});

app.get('/confirm', (req, res) => {
    res.render('confirmation', { order });
});

app.get('/admin', (req, res) => {
    res.render('admin');
});

app.post('/submit-order', (req, res) => {
    const order = {
        name: req.body.name,
        email: req.body.email,
        flavor: req.body.flavor,
        method: req.body.method,
        toppings: req.body.toppings,
        comment: req.body.comment,
        timestamp: new Date()
    }
    orders.push(order);
    console.log(orders);

    res.render('confirmation', { order });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

