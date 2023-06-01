const{test, expect}= require('@playwright/test');


/*
// const{hello, helloworld} = require('./demo/hello')
// instead of using const above can also use import as show below
import { hello, helloworld } from './demo/hello';

console.log (hello());
console.log (helloworld());
*/


test('My first test', async({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

})