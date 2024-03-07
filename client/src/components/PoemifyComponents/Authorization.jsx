import { useState, useEffect } from'react';
import axios from 'axios';
//import './Authorization.css';

export default function Authorization( code ) {

    const [accessToken, setAccessToken] = useState()
    useEffect(() => {
        axios.post("http://localhost:5000/api/spotify/login", {code})
        .then(res => {
            console.log(res)
            setAccessToken(res.data.access_token)
            window.history.pushState({}, null, "/poemify");
        })
        .catch(() => {
            window.location = '/poemify'
        })
    }, [code])

    return accessToken;
}