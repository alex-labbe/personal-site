import React from 'react';
import { Container } from 'react-bootstrap';
import querystring from 'query-string';



var client_id = 'e6bce471b0534241bf5288b1f3ad8d7c';
var scope = "user-top-read";
var redirect_uri = "https://personal-site-crn.pages.dev/poemify"

var authURL = 'https://accounts.spotify.com/authorize?' + 
    querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
});

export default function Login() {
    return (
            <Container>
                <a className="btn btn-success btn-lg" style={{color: '#1DB954'}} href={authURL}>Login with Spotify for something really cool</a>
            </Container>
        )
}
