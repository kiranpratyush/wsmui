import {Button} from "../components/Button";
import React from "react"
export default {
    title:"Button",
    Component:"Button"
}



const Template = ({children,...args2})=><Button {...args2} >{children}</Button>

// // export const Primary = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args ={
    disabled:"disabled",
    children:"I am good"
}
export const Primary = Template.bind({})
Primary.args ={
    children:"Primary"
}
export const Link = Template.bind({})
Link.args ={
    children:"Link",
    href:"#"
}