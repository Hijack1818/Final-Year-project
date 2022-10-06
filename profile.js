const puppeteer=require('puppeteer');

async function scrap(url)
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el]=await page.$x('/html/body/main/div/div/div/div/div/section[1]/ul/li[1]/span/span[2]');
    var innerHtml = await el.getProperty('textContent');
    const UserName = await innerHtml.jsonValue();
    console.log({UserName});

    const [el1]=await page.$x('/html/body/main/div/div/div/aside/div[1]/div/div[1]/div[1]');
    innerHtml = await el1.getProperty('textContent');
    const UserRating = await innerHtml.jsonValue();
    console.log({UserRating});

    
    browser.close();

}

scrap("https://www.codechef.com/users/shivam9464");