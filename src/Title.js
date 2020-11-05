import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components'

export default function Title({title}) {

    return ( 
    <styledTitleContainer className = "title-container" > 
        <StyledH2>{title}</StyledH2>
    </styledTitleContainer>
    )
}

const styledTitleContainer = styled.div`
background-color: ${(pr)=>pr.theme.black};
`

const StyledH2 = styled.h2`
background-color:${(pr)=>pr.theme.black};
color:white;
font-family:${(pr)=>pr.theme.monoSpace}, monospace;
`