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