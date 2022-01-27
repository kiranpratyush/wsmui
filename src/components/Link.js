import React from "react";
import styled from "styled-components";
import {COLORS} from "../Assets/color"

export function Link({ href, children, underline }) {
  let underLineValue = "always";
  if (underline === "none") {
    underLineValue = "none";
  } else if (underline ==="hover") {
    underLineValue = "hover";
  } else if (underline === "always") {
    underLineValue = "always";
  }

  return <LinkWrapper underline ={underLineValue}  href={href || "#"}>{children}</LinkWrapper>;
}

const LinkWrapper = styled.a`
    text-decoration: ${props=>props.underline==="always"?"underline":"none"};
    color:${COLORS.primary};

    &:hover{
        text-decoration:${props=>props.underline==="hover"?"underline":props.underline} ;
        
        
    }
`;
