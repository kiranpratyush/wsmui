import React from "react"
import {Link} from "../components/Link"
export default {
    title:"Button/Link",
    Component:"Link",
    argTypes:{
        underline:{
            options:["none",'always','hover'],
            control:{type:"select"}
        }
}
}



const Template = function({label,...args2})
{
    return <Link {...args2}>{label}</Link>
}


export const Base = Template.bind({})
Base.args ={
    label:"This is a Link",
    href:"https://www.google.com"
}
export const NotUnderline = Template.bind({})
NotUnderline.args ={
    ...Base.args,
    underline:"none"
   
}
export const HoverLink= Template.bind({})
HoverLink.args ={

    ...Base.args,
    underline:"hover"
}