import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';

export default function Header({date}){

    return(
        <StyledHeader className="header-container">
            <StyledH1Header>NASA Photo of the Day {date}</StyledH1Header>
            </StyledHeader>
    )
}

const StyledHeader = styled.div`

background-color:#7B68EE;
`
const StyledH1Header = styled.h1`
color:white;
`