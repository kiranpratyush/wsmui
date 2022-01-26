import {Button} from "../components/Button";
import React from "react"
export default {
    title:"Button/Main",
    Component:"Button"
}



const Template = ({label,...args2})=><Button {...args2} >{label}</Button>

// // export const Primary = Template.bind({})
export const Base = Template.bind({})
Base.args ={
    label:"Click Here"
}
export const Primary = Template.bind({})
Primary.args ={
    label:"Click Here",
    primary:true
}
export const Secondary = Template.bind({})
Secondary.args ={
    label:"Click Here",
    secondary:true
}

export const Disabled = Template.bind({})
Disabled.args ={
    label:"Click Here",
    disabled:true,
   
}

// export const Link = Template.bind({})
// Link.args ={
//     ...Primary.args,
//     href:"#"
// }