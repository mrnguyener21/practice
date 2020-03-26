// example 1
// Here we are using the data receive from the Names component(which is the data from the name object) and we are placing it within the our h1. The cool thing this is that since we are given the name object by the map function we are given each property of the object as its own individual return, thus having us create 3 different h1s despite only having 1 h1 returned in our name component. That is the beauty of props and transferring data within react
import React from 'react';

const Name = (props) => {
    return (
        <div><h1>Hello, my name is {props.firstName}{props.lastName}</h1></div>
        //hello, my name is bob smith
        //hello, my name is jack black
        //hellow my name is jill hill
    )
}

export default Child;





// EXAMPLE 2
//Here we are getting the colors from the parent function via props and using it as a parameter for our typeOfFlavor function to determine which flavor we want. So for example, the first loop we will get is color1 which is yellow, that data then gets transferred to the Flavors component and yellow will be used as the parameter for the typeOfFlavor function. It reads the parameter of yellow and that will then return mango
import React from 'react';

const Flavor = (props) =>{
    const typeOfFlavor = () => {
        if('red'){
            return 'strawberry'
        }else if('yellow'){
            return 'mangoe'
        }else{
            return 'peach'
        };
    }

    return ( 
        <div><h1>I would like the {typeOfFlavor(props.color)} flavor please</h1></div>
        //I would like the mango flavor please
        //I would like the peach flavor please
        //I would like the strawberry flavor please
    )
}

export default Flavor;