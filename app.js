import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.sendFile(`${import.meta.dirname}/views/home.html`);
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

