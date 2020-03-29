import axios from 'axios';

const URL = 'insert database url';
const response = await.axios.get(URL);
const fetchpeople = async () => {
    try{
        

        const people = response.data.map((person) => {
            const informationAboutPeople = {
                picture: person.pic,
                name: person.name,
                age: person.age,
                sex: person.sex 
                // 'person' is the parameter that we used to pass through our map functions and the dot notation we use is accessing the our data base. Since that's the case we have to make sure that what we type as to match up with how it's wrote in our data. In our example the array containing the data for pictures is labled pic so we have to say person.pic for it to work instead of person.picture which will not work
            }
            return informationAboutPeople;
        });  
        return people;
    }catch(error){
        //this is where you would add something for the 404 error page if we couldnt fetch the data
    }
}
export default fetchpeople;

import axios from 'axios';

const URL = 'insert database url';
const response = await.axios.get(URL);
const fetchColors = async()=>{
    try{
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

import axios from 'axios';

const URL = 'INSERT DATABASE URL HERE';

const response = await.axios.get(URL);

const fetchDogs = async()=> {
    try{
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

import axios from 'axios';

const URL = 'INSERT DATABASE URL HERE';

const response = await axios.get(URL);

const fetchSodas = async () => {
    try{
        const Sodas = response.data.map((soda)=>{
            const sodaInformation = {
                brand: soda.brand,
                regularOrDiet: soda.regularOrDiet,
                size: soda.oz
            } 
            return sodaInformation;
        })
        return Sodas;
    } catch(error){
        console.log(error);
    }
}
export default fetchSodas;



import axios from 'axios';

const URL = 'INSERT DATABASE URL HERE';

const response = await axios.get(URL);

const fetchAnimes = async () =>{
    try{
        const animes = response.data.map((anime)=>{
            const animeInformation = {
                title: anime.name,
                genre: title.genre,
                releaseDate: title.relateDate,
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
        return Laptops,
    }catch(error){
        console.log(error);
    }
}

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