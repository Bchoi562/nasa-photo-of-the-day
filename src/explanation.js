import React,{useEffect, useState} from "react";
import axios from 'axios';

export default function Explanation({explanation}) {

    // const [explanation, setExplanation] = useState();
    // useEffect(() => {
    //     axios
    //         .get(`https://api.nasa.gov/planetary/apod?api_key=Q2Q7Hg06gpDC8LMMTKII3cz2EMsMa3fyZfnjFeuA&date=2020-11-04`)
    //         .then((res) => {
    //             setExplanation(res.data.explanation);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, []);


    return ( 
    <div className = "explanation-container" > 
        <p>{explanation}</p>
    </div>
    )
}