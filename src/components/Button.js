import React from "react"
import styled from 'styled-components'
import COLORS from "../Assets/color"

function Link({href,children})
{
    return <a href={href}>{children}</a>
}
export  function Button({children,href,disabled})
{
    if(href)
    {
        return <LinkStyled href ={href}>{children.toUpperCase()}</LinkStyled>
    }
    else if(disabled)
    {
        return <BtnDisabled>{children.toUpperCase()}</BtnDisabled>
    }
    else{
        return <BtnWrapper>{children.toUpperCase()}</BtnWrapper>
    }
}


const BtnWrapper = styled.button`
font-size: 13px;
border:none;
color:${COLORS.primary_color};
font-weight: bold;
background-color: white;
padding:20px;

`
const BtnDisabled = styled(BtnWrapper)`
    color:grey;

`
const LinkStyled = styled.a`
color:${COLORS.primary_color};
text-decoration:none;
cursor: pointer;
padding:7px 10px;

&:hover{
    background-color: ${COLORS.hover_color};
}
`

