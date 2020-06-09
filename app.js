const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const GetAllCountriesApi = require('./src/countries/apis/get-all-companies-api')
const SearchCountryApi = require('./src/countries/apis/search-country-api')
app.get('/countries/all', GetAllCountriesApi);
app.post('/countries/search', SearchCountryApi);


app.use((error, req, res, next) => {
    res.send({
        error,
        status: false,
        message: 'something went wrong!'
    })
});

app.listen(port, () => console.log(`server listening to port - ${port}`))
