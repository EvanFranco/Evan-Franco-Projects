const puppeteer = require('puppeteer');

function getDate(){
    let date = new Date();
    let fullDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return fullDate;
}

async function webScrapper(url){

    const browser = await puppeteer.launch({});

    const page = await browser.newPage();

    await page.goto(url); // taking us to the website

    var product = await page.waitForSelector('#productTitle');
    var productText = await page.evaluate(product => product.textContent,product);

    var price = await page.waitForSelector('.a-price-whole');
    var priceText = await page.evaluate(price => price.textContent,price);

    console.log("date:" + getDate());
    console.log("Product:" + productText.trim());
    console.log("Price:" + priceText.trim());

    await browser.close();
}

webScrapper('https://www.amazon.com/Apple-iPhone-11-64GB-Unlocked/dp/B07ZPKZSSC/ref=sr_1_3?dchild=1&keywords=iphone+11&qid=1613660734&sr=8-3');