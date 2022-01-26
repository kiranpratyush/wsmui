import {Button} from "../components/Button";
import React from "react"
export default {
    title:"Button/text",
    Component:"Button"
}



const Template = ({label,...args2})=><Button {...args2} >{label}</Button>

// // export const Primary = Template.bind({})
export const Primary = Template.bind({})
Primary.args ={
    label:"Click Here",
    primary:"primary"
}

export const Disabled = Template.bind({})
Disabled.args ={
    ...Primary.args,
    disabled:"disabled",
   
}

export const Link = Template.bind({})
Link.args ={
    ...Primary.args,
    href:"#"
}