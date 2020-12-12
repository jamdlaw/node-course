const express = require('express');
const bardyParser = require('body-parser');

const app = express();

app.use(bardyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next ) => {
    res.send('<form action="/product" method="POST" > <input type="text" name="tite"> <button type="submit"> submit</button> </form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1> Welcome to node </h1>');
});
app.listen(3000);

