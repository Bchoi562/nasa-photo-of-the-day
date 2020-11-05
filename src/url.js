import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled, {keyframes} from 'styled-components';

export default function Url({url}) {

    return ( 
    <StyledDiv className = "url-container" > 
        <img src={url} alt="pic"/>
    </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background-color: ${(pr)=>pr.theme.black};
    padding:30px;
    padding-bottom:100px;

`;

