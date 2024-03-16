import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function AddAlbum() {
 const [form, setForm] = useState({
   albumName: "",
   artistName: "",
   rating: "",
   spotifyURI: "",
 });

 const navigate = useNavigate();

 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 async function onSubmit(e) {
   e.preventDefault();
   const newAlbum = { ...form };
   await axios
    .post(`http://${import.meta.env.VITE_REACT_APP_API_URL}/api/album/`, newAlbum)
    .then((res) => {
      setForm({ albumName: "", artistName: "", rating: "", spotifyURI: "" });
      navigate("/music");
    })
    .catch((err) => {
      console.log(err);
    })
 }
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Add New Album</h3>
     <form onSubmit={onSubmit}>
     <div className="form-group">
         <label htmlFor="albumName">Album Name</label>
         <input
           type="text"
           className="form-control"
           id="albumName"
           value={form.albumName}
           onChange={(e) => updateForm({ albumName: e.target.value })}
         />
       </div>  
       <div className="form-group">
         <label htmlFor="artistName">Artist Name</label>
         <input
           type="text"
           className="form-control"
           id="artistName"
           value={form.artistName}
           onChange={(e) => updateForm({ artistName: e.target.value })}
         />
       </div>  
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
 );
}