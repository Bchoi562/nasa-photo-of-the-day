import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
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
    <ExplanationDiv className = "explanation-container" > 
        <StyledPara>{explanation}</StyledPara>
    </ExplanationDiv>
    )
}

const ExplanationDiv = styled.div`
background-color: ${(pr)=>pr.theme.black}
`

const StyledPara = styled.p`
&:hover{
    transform:scale(1.1);
    transition:transform 0.5s ease-in-out;
    padding-right:200px;
    padding-top:60px;
    
}
/* transition:transform 0.5s ease-in-out; */
text-align:left;
padding:40px;
font-family:${(pr)=>pr.theme.monoSpace}, monospace;
font-size:25px;
color:${(pr)=>pr.theme.white}
`