const { defineSupportCode } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var vue_base_url = "http://localhost:3000/";



defineSupportCode( async ({Given, When, Then}) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    Given('eu estou na página {string}', async function (string) {
        // Write code here that turns the phrase above into concrete actions
        await page.goto('https://localhost:8080/');
        return 'pending';
    });

    When('Eu digito o CPF {string} no campo de busca por CPF', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    When('Eu requisito o sistema para {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('O sistema mostra um item com {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
})