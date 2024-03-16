import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function AddAlbumByURI() {
    const [accessToken, setAccessToken] = useState(null);
    useEffect(() => {
      if(accessToken) { return ;}
        axios.post(`https://${import.meta.env.VITE_REACT_APP_API_URL}/api/spotify/key`)
            .then(res => {
                setAccessToken(res.data.access_token);
        })
    }, [])
       
    const [form, setForm] = useState({
      spotifyURI: "",
      rating: "",
    });

    const navigate = useNavigate()
   
    function updateForm(value) {
      return setForm((prev) => {
        return { ...prev, ...value };
      });
    }

    async function onSubmit(e) {
      e.preventDefault();

      // first get the information about the album with GEt api/spotify with the access token and the uri passed in, save these to consts?
      const albumInput = {
        access_token: accessToken, spotifyURI: form.spotifyURI
      }
      await axios
        .post(`https://${import.meta.env.VITE_REACT_APP_API_URL}/api/spotify`, albumInput)
        .then((res) => {
          sendAlbum(res.data, form.rating, form.spotifyURI);
          navigate("/music")
          setForm({spotifyURI: "", rating: ""})
        })
    }

    async function sendAlbum(album, rating, spotifyURI){
      const newAlbum = { 
        albumName: album.albumName,
        artistName: album.artistName,
        spotifyURI: spotifyURI,
        img: album.img,
        link: album.link,
        rating: rating
      }
      await axios
        .post(`https://${import.meta.env.VITE_REACT_APP_API_URL}/api/album/`, newAlbum)
        .then((res) => {
          console.log(res.status)
        })
        .catch((err) => {
          console.log(err);
        })
    }


    return (
      <div>
      <h2>Add Rating!</h2>
      <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="rating">Rating</label>
         <input
           type="number"
           className="form-control"
           id="rating"
           value={form.rating}
           onChange={(e) => updateForm({ rating: e.target.value })}
         />
       </div>  
       <div className="form-group">
         <label htmlFor="spotifyURI">Spotify URI</label>
         <input
           type="text"
           className="form-control"
           id="spotifyURI"
           value={form.spotifyURI}
           onChange={(e) => updateForm({ spotifyURI: e.target.value })}
         />
       </div>  
       <div className="form-group">
         <input
           type="submit"
           value="Add album"
           className="btn btn-primary"
         />
       </div>
     </form>
      </div>

    )


}

