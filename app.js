import * as cheerio from "cheerio";
import fetch from "node-fetch";

//basic web scraping
// const html = '<h2 class="title">Halo Surabaya</h2>';
// const $ = cheerio.load(html);
// const text = $('h2.title').text();
// console.log(text);

async function getHtml(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();

    return html;
  } catch (error) {
    console.log(error);
    return;
  }
}

// const html      = await getHtml("https://rizafahmi.com/articles");
const html = await getHtml(
  "https://rizafahmi.com/2021/09/12/tentang-friction-log/"
);
const $ = cheerio.load(html);
const articles = $("ul").find("li").find("a");

// for (let i = 0; i < articles.length; i += 1) {
//   console.log(`${i + 1} - ${articles[i].children[0].data}`);
// }

const footer = $("footer").find("a");
console.log(footer.length); // 10
for (let i = 0; i < footer.length; i += 1) {
  console.log(footer[i].children[0].data);
}
