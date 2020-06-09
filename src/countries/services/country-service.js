const axios = require('axios');

module.exports.getAllCompanies = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://restcountries.eu/rest/v2/all').then(result => {
            resolve(result.data)
        }).catch(ex => {
            console.log(ex)
            reject(ex)
        })
    })
}


module.exports.searchCountry = (countryName) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`).then(result => {
            resolve(result.data)
        }).catch(ex => {
            console.log(ex)
            reject(ex)
        })
    })
}