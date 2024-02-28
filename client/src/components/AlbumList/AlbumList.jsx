import AddAlbum from '../AddAlbum.jsx';
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumEntry from "../AlbumEntry/AlbumEntry.jsx";
import './AlbumList.css'
import AddAlbumByURI from '../AddAlbumByURI.jsx';

function AlbumList() {
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        const getAlbums = async () => {
            /*axios.get("/api/album")
            .then(res => {
                setAlbums(res.json)
                console.log(res.body)
            }).catch((err) => {
                console.log(err);
            })
        }*/
            const response = await fetch('http://localhost:5000/api/album',)
            const json = await response.json()
            console.log(json)

            if (response.ok) {
                setAlbums(json)
            }

            
        }

        getAlbums()
    }, []);


    return (
        <>
            <h1>Album List</h1>
            <table>
                <tbody>
                        {albums && albums.map((album) => (
                            <AlbumEntry key={album._id} albumName={album.albumName} artistName={album.artistName} rating={album.rating} img={album.img} link={album.link}/>
                        ))}
                </tbody>

            </table>
            <AddAlbumByURI />
        </>
    )
}

export default AlbumList