// Module text pro me by iky
const request = require("request");
const cheerio = require("cheerio");

const tema = {
  glitch2: "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
magma: "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"
}

async function pGlitch(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.glitch,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pMagma(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.magma,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

module.exports = {
  pGlitch2,
  pMagma
};
