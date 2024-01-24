const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app=express();

let url = 'https://portal.njcourts.gov/webe40/jacse';

axios(url)
    .then(response => {
       let html= response.data;
       let money = cheerio.load(html);
       const data=[];
       
       console.log(html);
    })

app.listen(PORT, ()=> console.log('server running on PORT ${PORT}'));