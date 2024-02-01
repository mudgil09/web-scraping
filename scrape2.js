const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const writeStream = fs.createWriteStream('post.csv');



request('https://www.sitebuilderreport.com/inspiration/blog-examples',(error,response,html) => {
    if(!error && response.statusCode == 200){
       // console.log(html);
       const $ = cheerio.load(html);
    //    const siteHeading = $('.inspiration-footer');
    //    console.log(siteHeading.html());
    $('.screenshots').each((i,el) => {
        const title = $(el).find('.one').text();
        const link = $(el).find('a').attr('href');
        const date = $(el).find('.post-date').text();
        console.log(title,link,date);
        writeStream.write(`${link} \n`);

    });
    console.log('scraping completes.')
    }
});