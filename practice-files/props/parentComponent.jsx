// example 1
// Here we are looping through the name object within the Names component using the maps function so that each loop get its own return. Within it, we are also passing that data to the Name component via props that we label as name. This makes the Names component the parent component and then Name the child component
import React from 'react';
import Name from './childComponent';

const Names = () => {
    const name = {
        name1: ['bob','smith'],
        name2: ['jack','black'],
        name3: ['jill','hill'],
    }
    return(
        name.map((firstName, lastName) => <Name firstName = {firstName} lastName={lastName}/>)
        //the reason i think this works is because the parameter in the maps function represents the data within the current loop. So first loop would be first property which is name1. Name1 has an array containing 2 strings. I feel that its safe to say that the first paramete(firstName) defaults to the first index of the array and the second parameter(lastName) defaults to the second index.
    )
}
export default Names;

// EXAMPLE 2
//Here I am going to display different strings based on what the prop gives us
import React from 'react';
import Flavor from './childComponent';
const Flavors = () => {
    const colors = {
        color1: 'yellow',
        color2: 'pink',
        color3: 'red'
    }
    return (
        colors.map((color) =><Flavors color = {color}/>)
    )
}

export default Flavors;