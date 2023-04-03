import bodyParser from 'body-parser';
import express from 'express';
import mysql from 'mysql2';

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    database: 'site',
    password:'',
}).once('connection', (stream) => {
    console.log('Ah, we have our first user!');
});

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    connection.query('select * from users', (err, result, fields) => {
        console.log(result)
        res.render('pages/index', {users: result})
    })
})

app.post('/cart', function(req, res ){
    console.log('req after add to cart: ', req.body)
})

app.get('/', function(httpRequest,httpResponse){
    console.log('objet request: ', httpRequest);
    httpResponse.render('pages/index')
});

app.get('/toto', function(httpRequest,httpResponse){
    console.log('objet request: ', httpRequest);
    httpResponse.send('route toto')
});

app.get('/about', (req,res) => {
    res.render('pages/about')
})

app.listen('3003')

app.get('/panier', (req, res) => {
    res.render('pages/panier');
})

app.get('/VAnkara', (req, res) => {
    res.render('pages/VAnkara');
})

app.get('/VBarcelone', (req, res) => {
    res.render('pages/VBarcelone');
})

app.get('/VLisbonne', (req, res) => {
    res.render('pages/VLisbonne');
})

app.get('/VLondres', (req, res) => {
    res.render('pages/VLondres');
})

app.get('/VLyon', (req, res) => {
    res.render('pages/VLyon');
})

app.get('/VMarrakech', (req, res) => {
    res.render('pages/VMarrakech');
})

app.get('/VParis', (req, res) => {
    res.render('pages/VParis');
})

app.get('/VPorto', (req, res) => {
    res.render('pages/VPorto');
})

app.get('/VRome', (req, res) => {
    res.render('pages/VRome');
})

app.get('/VSeoul', (req, res) => {
    res.render('pages/VSeoul');
})

app.get('/VSingapour', (req, res) => {
    res.render('pages/VSingapour');
})

app.get('/VTokyo', (req, res) => {
    res.render('pages/VTokyo');
})