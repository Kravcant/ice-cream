import express from 'express';

const app = express();

const PORT = 3001;

app.set('view engine', 'ejs');

console.log('CWD:', process.cwd());
console.log('View engine:', app.get('view engine'));
console.log('Views path:', app.get('views'));

const orders = [];

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/confirm', (req, res) => {
    res.render('confirmation', { order });
});

app.get('/admin', (req, res) => {
    res.render('admin', { orders });
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

