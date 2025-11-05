import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

