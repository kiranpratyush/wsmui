import React from "react"
import styled from 'styled-components'
import COLORS from "../Assets/color"
import { SIZES } from "../Assets/buttonSize"

// function Link({href,children})
// {
//     return <a href={href}>{children}</a>
// }
export  function Button(props)
{   const children = props.children
    const disabled = props.disabled
    const primary = props.primary
    const secondary = props.secondary
    const color = props.color
    const size = props.size
    
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
        return <BtnWrapper size ={size} bgColor ={color||COLORS.baseColor}>{children.toUpperCase()}</BtnWrapper>
    }
}

function setHeight(props)
{
    if(props.size)
    {
        const size = props.size
        return SIZES[size].height
    }
}
function setWidth(props)
{
    if(props.size)
    {
        const size = props.size
        return SIZES[size].width
    }

}
const BtnWrapper = styled.button`
font-family: "Roboto" ,sans-serif;
font-size: 14px;
height:${props=>props.size?setHeight(props):SIZES.medium.height};
width:${props=>props.size?setWidth(props):SIZES.medium.width};
border:none;
color:${props=>props.bgColor===COLORS.baseColor?COLORS.black:"white"};
font-weight: bold;
background-color: ${(props)=>props.bgColor};
text-align:center;
cursor: pointer;
padding:2px;
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
