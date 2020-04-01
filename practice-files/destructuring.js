//example 1
const stuff = { a:1, b:2, c:3};
const {a:d,b,c} = stuff;
console.log(b,c,d)//2,3,1

//example 2
const array = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const {a,b,c} = array[1];
console.log(a,b,c);//4,5,6;

//example 3
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return ({a,b,c});
})
console.log(objects)// [{1,2,3},{4,5,6}]

//example 4
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return (a);
})
console.log(objects)

//example 5
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return (a,b,c);
})
console.log(objects)//[3,5] why is it only returning c

//example 6
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return (object);
})
console.log(objects) //[{1,2,3},{4,5,6}], this is the case, because you are ignoring the assigning to const a, b & c and returning the actually object parameter from each iteration

//example 7 USING EXAMPLE 2 FROM FETCHING.JS
import axios from 'axios';

const URL = 'enter database url here';

const fetchColors = async () => {
    try{
        const response = await axios.get(URL);
        const colors = response.data.map((color)=> {
            const{warm, cold, primary, secondary} = color
            return ({warm, cold, primary, secondary});//should return an array with each index being an object containing data that matches the property name of warm, cold, primary and secondary
        })
        return colors;
    }catch(error){
        console.log('NO COLORS FOUND')
    }
}
export default fetchColors;

// example 8 USING EXAMPLE 3 FROM fetch.JS
import axios from 'axios';

const URL='insert database URL here';

const fetchDogs = async ()=>{
    try {
        const response = await axios.get(URL);
        const dogs = response.data.slice(0,5).map((dog)=>{
            const{breed,age,sex,color}=dog;
            return({breed, age, sex, color});//return an array with 5 objects, each containing properties from the database where the property names' match. So if the property breed matches to a property name breed in the database, it will pull it for the first 5 objects
        })
        return dogs;
    }catch(error){
        console.log('NO DOGGIES FOUND')
    }
}
export default fetchDogs;

const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
  console.log(a,b,c)
})
console.log(objects)//returns the numbers below it
//1,2,3
//4,5,6
//why does it return two separate objects with all of the variables displayed but in example 5 if i do return(a,b,c) it returns an array and only an array containing the data for c 