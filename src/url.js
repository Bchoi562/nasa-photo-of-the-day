import React,{useEffect, useState} from "react";
import axios from 'axios';

export default function Url() {

    const [url, setUrl] = useState();

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Q2Q7Hg06gpDC8LMMTKII3cz2EMsMa3fyZfnjFeuA&date=2020-11-04`)
            .then((res) => {
                setUrl(res.data.url);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return ( 
    <div className = "url-container" > 
        <img src={url} alt="pic"/>
    </div>
    )
}