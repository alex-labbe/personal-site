import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import './AlbumEntry.css'
import AlbumStars from "./AlbumStars";

function AlbumEntry( {albumName, artistName, rating, spotifyURI, img, link} ) {
    const [imgSrc, setImgSrc] = useState('./assets/AL.jpg');
    return(
        <tr>
            <td>
                <img className="album-image" src={img} alt={'albumName'}/>
            </td>

            <td>
                <div className="album-details">
                    <a className="album-name" href={link} target="_blank">
                        <p>{albumName}</p>
                    </a>
                    <p className="artist-name">{artistName}</p>
                </div>

            </td>

            <td className="stars">
                <AlbumStars rating={rating} className="rating"/>
            </td>
        </tr>
    )
}

export default AlbumEntry