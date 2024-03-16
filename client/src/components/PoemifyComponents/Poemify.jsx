import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button"

export default function Poemify( poemData ) {
    const [poem, setPoem] = useState("");
    const [loading, setLoading] = useState(true);

    let songs = poemData.poemData;
    
    function generate(){
        setLoading(true);
        axios({
            method: 'POST',
            url: `https://${import.meta.env.VITE_REACT_APP_API_URL}/api/gpt/generate`,
            params: {
                poemData: songs,
            }
        }).then((response) =>{
            setPoem(response.data.poem);
            console.log(response.data.poem);
            //return response.data.poem;
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }
    

    return (
        <div className="gen" style = {{alignContent: "center"}}>
            <><Button variant ="primary" onClick={() =>
                setPoem(generate())
            }>Generate</Button></>
            <div style={{ whiteSpace: "pre-line", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {poem}
            </div>
        </div>
    )
}

