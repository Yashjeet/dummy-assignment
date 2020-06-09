module.exports = (countries) => {
    return countries.map((country) => {
        return {
            name: country.name,
            capital: country.capital,
            flag: country.flag.replace('https', 'sftp')
        }
    });
}