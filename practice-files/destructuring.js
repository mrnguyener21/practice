//EXAMPLE 2 from fetching.js
import axios from 'axios';

const URL = 'enter database url'

const fetchDogs = async () => {
    try{
        const response = await axios.get(URL);
        const dogs = response.data.map((dog)=> {
            const {breed,age,sex,color} = dog;
            //this will grab the properties from the data set of breed, age, sex and color within the database
        })
        return dogs;
    }catch(error){
        console.log('NO DOGGIES FOUND')
    }
}
export default fetchDogs

//random deconstructuring example to double check deconstructuring from example 2
const arrayOfObjects = [
    {a:1,b:2,c:3},
    {a:4,b:5,c:6},
    {a:7,b:8,c:8},
];
const objects = arrayOfObjects.map((object)=>{
    const{a,b,c} = object;
});


// object will return the following:
// object:{a:1,b:2,c:3}
// object:{a:4,b:5,c:6}
// object:{a:7,b:8,c:9}
// console.log(object(a)) would return the following:
// 1
// 4
// 7

