const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: 'fixtures',
    sigUpSucessURL:'https://magento.softwaretestingboard.com/customer/account/',
    baseURL: 'https://magento.softwaretestingboard.com/customer/account/create/',
    firstName: 'John',
    lastName: 'Miller',
    signUpSucess: 'https://magento.softwaretestingboard.com/pub/static/version1666447838/frontend/Magento/luma/en_US/js-translation.json'
    },
});