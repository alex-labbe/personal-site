const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config()

router.post('/api/gpt/generate', async (req, res) => {
    const prompt = `You will be provided with text delimited by triple quotes. 
    Write me a medium-length poem based on the song - artist pairs listed in the triple quotes.
    Do not write anything other the poem.
    '''${req.query.poemData}'''
    `

    const openai = axios.create({
        baseURL: "https://api.openai.com/v1",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + process.env.OPENAI_API_KEY
        }
    });

    openai.post("/chat/completions", {
        model: "gpt-4",
        messages: [{role: "user", content: prompt}],
    }).then(response => {
        console.log(response.data.choices[0].message.content)
        res.json({  
            poem: response.data.choices[0].message.content,
        })
    });
});

module.exports = router;