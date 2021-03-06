//EXAMPLE 1
import axios from 'axios';

const URL = 'insert database url';

const fetchPeople = async () => {
    try {
        const response = await axios.get(URL);
        
        // OBJECT DESTRUCTURING 

        // const person = { 
        //     firstName: 'Victor', 
        //     lastName: 'Nguyen'
        //     age: 25,
        //     pets: [
        //         { name: 'pet1' }
        //     ]
        //     car: {
        //         make: 'BMW',
        //         color: 'blue',
        //         year: 2010,
        //     }
        // }

        // const { thingsToDesctructure} = objectToDestructureFrom;
        
        // const { firstName, lastName, age, pets, car: { make, color, year } } = person;

        // console.log(firstName, lastName, age);
        // console.log(pets[0].name);
        // console.log(make);
        // console.log(color);
        // console.log(year);

        const people = response.data.map((person) => ({ 
            pic: person.pic,
            name: person.name,
            age: person.age,
            sex: person.age 
        }));

        return people;
    } catch(error){
        console.log(error);
    }
}

export default fetchPeople;

//EXAMPLE 2
import axios from 'axios';

const URL = 'insert database url';
const fetchColors = async()=>{
    try{      
        const response = await axios.get(URL);

        const colors = response.data.map((color) =>{
            const colorCategory ={
                warm: color.warm,
                cold: color.cold,
                primary: color.primary,
                secondary: color.secondary,
            }
            return colorCategory;
        })
        return colors;
    }catch(error){
        console.log(error);
    }
}

export default fetchColors;

//EXAMPLE 2 USING DESTRUCTIRNG AND JAVASCRIPT IMPLEMENTATION OF SAME NAME

//EXAMPLE 3
import axios from 'axios';

const URL = 'INSERT DATABASE URL HERE';


const fetchDogs = async()=> {
    try{
        const response = await axios.get(URL);
        
        const dogs = response.data.slice(0,5).map((dog)=>{
            const dog = {
                breed: dog.breed,
                age: dog.age,
                sex: dog.maleOrFemale,
                color: dog.furColor,
            }
            return dog;
        } )
        return dogs;
    }catch(error){
        console.log(error)
    }
}
export default fetchDogs;

//EXAMPLE 4
import axios from 'axios';

const URL = 'INSERT DATABASE URL HERE';

const fetchSodas = async () => {
    try{
        const response = await axios.get(URL);
        
        const sodas = response.data.map((soda)=>{
            const sodaInformation = {
                brand: soda.brand,
                regularOrDiet: soda.regularOrDiet,
                size: soda.oz
            } 
            return sodaInformation;
        })
        return sodas;
    } catch(error){
        console.log(error);
    }
}
export default fetchSodas;


//EXAMPLE 5
import axios from 'axios';

const URL = 'INSERT DATABASE URL HERE';

const fetchAnimes = async () =>{
    try{
        const response = await axios.get(URL);
        
        const animes = response.data.map((anime)=>{
            const animeInformation = {
                title: anime.name,
                genre: title.genre,
                releaseDate: title.releaseDate,
                numberOfEpisodes: title.episodeCount
            } 
        return animeInformation;
        })
    return animes;
    }catch(error){
        console.log(error)
    }
}
export default fetchAnimes;


//EXAMPLE 6
import axios from 'axios';

const URL = 'ENTER WEBSITE HERE';

const response = await axios.get(URL);

const fetchLaptops = async ()=> {
    try{
        const Laptops = response.data.map((laptop)=> {
            const laptopInformation={
                model: laptop.model,
                size: laptop.size,
                cpu: laptop.cpu,
                ram: laptop.ram,
                gigs: laptop.gigabyte,
            }
            return laptopInformation;
        })
        return Laptops;
    }catch(error){
        console.log(error);
    }
}
export default fetchLaptops;

//EXAMPLE 7
import axios from 'axios';

const URL = 'ENTER DATABASE URL HERE';

const response = await axios.get(URL);

const fetchWatches = async()=>{
    try{
        const watches = response.data.map((watch)=>{
            const watchData={
                brand: watch.brand,
                type: watch.kind,
                value: watch.value,
            }
            return watchData;
        })
        return watches;
    }catch(error){
        console.log(error)
    }
}
export default fetchWatches;

//EXAMPLE 8
import axios from 'axios';

const URL = 'ENTER WEBSITE HERE';

const response = await axios.get(URL);

const fetchItems = async () => {
    try{
        const items = response.data.map((item) => {
            const itemInformation = {
                something1: item.stuff1,
                something2: item.stuff2,
            }
            return itemInformation;
        })
        return items;
    }catch(error){
        console.log(error);
    }
}
export default fetchItems;