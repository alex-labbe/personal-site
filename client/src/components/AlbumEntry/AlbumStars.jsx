import { FaStar, FaStarHalf } from "react-icons/fa"
import React, {useEffect, useState} from "react"

export default function AlbumStars({rating}) {

    const [hasHalf, setHasHalf] = useState((rating/2) % 1 !== 0)
    return (

    <div>
        {Array.from({ length: Math.floor(rating/2)+1 }).map((_, index) => (
            <FaStar color="#6d6d6d"key={index} style={index === 0 ? { display: "none" } : {}}/>
        ))}
        {hasHalf && <FaStarHalf color="#6d6d6d"/>}
    </div>  
    )
}

    /*
    const [stars, setStars] = useState([<FaStar key={-1} style={{display: "none"}}/>])
    useEffect(() =>{
        for(let i = 0; i < numStars; i){
            setStars(stars.push(<FaStar key={i} fill="white"/>));
        }
    }, []) 
    <FaStarHalf key="half" style={hasHalf ? {display:"none"}: {}}/>*/