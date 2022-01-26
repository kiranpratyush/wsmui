import React from "react"
import styled from 'styled-components'
import COLORS from "../Assets/color"

// function Link({href,children})
// {
//     return <a href={href}>{children}</a>
// }
export  function Button({children,disabled,primary,secondary})
{
    
    if(disabled)
    {
        return <BtnDisabled>{children.toUpperCase()}</BtnDisabled>
    }
    else if(primary){
        return <PrimaryBtn>{children.toUpperCase()}</PrimaryBtn>
    }
    else if(secondary)
    {
        return <SecondaryBtn>{children.toUpperCase()}</SecondaryBtn>
    }
    else{
        return <BtnWrapper>{children.toUpperCase()}</BtnWrapper>
    }
}


const BtnWrapper = styled.button`
font-family: "Roboto" ,sans-serif;
font-size: 14px;
border:none;
color:${COLORS.black};
font-weight: bold;
background-color: ${COLORS.baseColor};
padding:11px 21px;
text-align:center;
cursor: pointer;
border-radius: 4px;
`
const BtnDisabled = styled(BtnWrapper)`
    color:grey;
    cursor: initial;

`
// const LinkStyled = styled.a`
// font-size: 13px;
// color:${COLORS.primary};
// text-decoration:none;
// cursor: pointer;
// padding:7px 10px;
// font-weight:bold;

// &:hover{
//     background-color: ${COLORS.primary};
// }

const PrimaryBtn = styled(BtnWrapper)`
    background-color: ${COLORS.primary};
    color:${COLORS.white}

`

const SecondaryBtn = styled(BtnWrapper)`
    background-color: ${COLORS.secondary};
    color:${COLORS.white}

`
