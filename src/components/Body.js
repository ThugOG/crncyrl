import { useState, useEffect} from "react"
import AnimeCard from "./AnimeCard"
import Shimmer from "./Shimmer"
const Body = ()=>{
    const [recentRelease, setRecentRelease] = useState([])
    const getAnimeData = async() => {
        const data = await fetch("https://gogoanime.consumet.stream/popular")
        const json = await data?.json();
        console.log(json)
        setRecentRelease(json)
    }
    const show = () =>{
        console.log(recentRelease)
    }
    useEffect(()=>{
        getAnimeData()
    }, [])
    return (recentRelease.length === 0)?<Shimmer />:(
            <div className="main-page-body">
                {/* <button onClick={show}>Show</button> */}
            {
                recentRelease.map((single, index)=>{
                    return <AnimeCard {...single} key={index}/>
                })
            }
            </div>
    )
}
export default Body