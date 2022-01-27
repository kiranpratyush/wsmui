import {Button} from "../components/Button";
import React from "react"
import { SIZES } from "../Assets/buttonSize";
export default {
    title:"Button/Secondary",
    argTypes: {
        size: {
          options: ['small', 'medium','large'],
          control: { type: 'select' },
        },
      },
}

const Template = ({label,...args2})=><Button {...args2} >{label}</Button>

// // export const Primary = Template.bind({})

export const Small = Template.bind({})
Small.args ={
    label:"Click Me",
    size:"small"
}



export const Medium = Template.bind({})
Medium.args ={
    label:"Click Me",
    size:"medium"
}

export const Large = Template.bind({})
Large.args ={
    label:"Click Me",
    size:"large"
}
