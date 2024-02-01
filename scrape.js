const request = require('request');
const cheerio = require('cheerio');

request('https://www.sitebuilderreport.com/inspiration/blog-examples',(error,response,html) => {
    if(!error && response.statusCode == 200){
       
        //console.log(html);
        const $ = cheerio.load(html);
        const siteHeading = $('.inspiration-footer');
        console.log(siteHeading.text());
        console.log(siteHeading.html());
       // const output = siteHeading.find('h1').text();
        const output = siteHeading.children('h1').next().text();
        console.log(output);
    }
});
//<div class=​"w-search flex row afc max-w-desktop mx-auto w-full">​flex