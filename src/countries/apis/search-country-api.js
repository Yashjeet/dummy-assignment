const countryService = require('../services/country-service');
const PromiseHandler = require('../../../lib/promise-handler');
const FilterCountryProperties = require('../helpers/filter-country-properties');
const fs = require('fs');

const SaveToFile = (result) => {
    fs.writeFile('./src/countries/data/' + `searchCountries-${new Date().getTime()}`,
        JSON.stringify(result),
        'utf8', (error, result) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log("File saved");
            };
        });
}

module.exports = async (req, res, next) => {

    const { countryName } = req.body;

    const [err, result] = await PromiseHandler(countryService.searchCountry(countryName))
    if (err)
        next(err)
    else {
        const countries = FilterCountryProperties(result)
        SaveToFile(countries);
        res.send({
            status: true,
            message: "Successfully get search countries!",
            entity: countries
        })
    }
}