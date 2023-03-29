import bodyParser from 'body-parser';
import express from 'express';

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function(httpRequest,httpResponse){
    console.log('objet request: ', httpRequest);
    httpresponse.render('pages/index')
});

app.get('/toto', function(httpRequest,httpResponse){
    console.log('objet request: ', httpRequest);
    httpresponse.send('route toto')
});

app.get('/about', (req,res) => {
    res.render('pages/about')
})

app.listen('3003')