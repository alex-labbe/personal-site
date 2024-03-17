const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config()

// take uri and access token and return json of the stuff i want
router.post('/', async (req, res) => {
    const { spotifyURI, access_token} = req.body;
    
    const link = `https://api.spotify.com/v1/albums/${spotifyURI}`
    try {
        await axios
        .get(link,
        {
            headers: { 'Authorization': 'Bearer ' + access_token }
        }).then(response => {
            res.status(200).json({
                artistName: response.data.artists[0].name,
                albumName: response.data.name,
                img: response.data.images[2].url,
                link: response.data.external_urls.spotify
            })
        })
    } catch (err) {
        res.status(400).json(err)
    }

})

router.post('/key', async (req, res) => {
    try{

        await axios
        .post('https://accounts.spotify.com/api/token', 
        { grant_type: 'client_credentials'}, {
            headers: {
                'Authorization': `Basic ${new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response =>{
            res.status(200).json({
                access_token: response.data.access_token,
                token_type: response.data.token_type,
                expires_in: response.data.expires_in                
            })
            
        })
    }catch(err){
        res.status(400).json({error: err.message})
    }

})
///////////////////////////////////////////
router.post('/login', (req, res) => {
    
    var code = req.body.code || null;
    axios({
       method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: {
            code: code,
            redirect_uri: 'https://alexlabbe.com/poemify',
            grant_type: 'authorization_code'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        }).then(response => {
            res.json({
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token,
                expires_in: response.data.expires_in
            })
        }).catch(err => {
            res.sendStatus(400);
            console.log(err);
        });
});

module.exports = router;