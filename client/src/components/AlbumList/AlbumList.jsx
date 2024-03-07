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
    const topster = <a href='https://www.reddit.com/r/Topster/comments/10rzehu/been_getting_pretty_deep_into_alternative_rap_hip/' target='_blank'>topsters</a>
    const fantano = <a href='https://www.youtube.com/@theneedledrop' target='_blank'>anthony fantano</a>
    const rym = <a href='https://rateyourmusic.com/' target='_blank'>rateyourmusic</a>
    const letterboxd = <a href='https://letterboxd.com/' target='_blank'>letterboxd</a>

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
            <div className="statement">
                <p>while i had a lot of fun creating this rating list, learning the mern stack, and writing the Go command line interface (the main motivation for making this rating list)
                    that makes adding albums to this super simple, <b>rating art is something i fundamentally disagree with.</b> i am a big hip-hop guy but the community on twitter and other socials is just so toxic and feel like absolutely needs to be rated and ranked. 
                    the amount of {topster} i've seen just hurts my brain. the worst part is that they always look the same, like the one i linked. i feel like i am unable to objectively give an album, or any art, a numeric 1-10 rating. my
                    opinions have been clouded by my time lurking in the hip hop community and {fantano} and {rym}. i really wish i could form objective opinions but it is so difficult when you have these faceless entities online telling you what is good music and what is bad music. i 
                    have the same issue with {letterboxd}, i have simply started selecting the like button for movies in the "reviews" i write about them, rather than giving them a score 1-10. i much prefer just saying i like, or dont like an album, while maintaining a list of my favorites. but if i did that this list
                    would be much more boring, because i would not spend the time to add any albums that i do not like. thus i will try my best to rate an album as well as i can.
                </p>
            </div>
            <AddAlbumByURI />
        </>
    )
}

export default AlbumList