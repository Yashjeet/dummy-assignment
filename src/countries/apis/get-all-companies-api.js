const countryService = require('../services/country-service');
const FilterCountryProperties = require('../helpers/filter-country-properties')
const PromiseHandler = require('../../../lib/promise-handler');

module.exports = async (req, res, next) => {

    const [err, result] = await PromiseHandler(countryService.getAllCompanies())
    if (err)
        next(err)
    else {
        const countries = FilterCountryProperties(result)
        res.send({
            status: true,
            message: "Successfully get all countries!",
            entity: countries
        })
    }
}