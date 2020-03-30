//EXAMPLE 1
import React from 'react';
import fetchPeople from './fetching.js';

class People extends React.Component{
    state={
        people:[],
    }
    async componentDidMount(){
        const data = await fetchPeople();

        this.setState({people:data});
        //why are we able to write this instead of this.setState = ({people:this.state.people:data})?
    };
    render(){
        if(this.state.people.length === 0){
            return <h1>LOADING</h1>
        }else {
            return(
                this.state.people.map((person)=> {
                <>
                    <img src = {people.picture} alt = 'id'/>
                    <h1>{person.name}</h1>
                    <h1>{person.age}</h1>
                    <h1>{person.sex}</h1>
                </>
                })
            )
        }
    }
}
export default People;

//EXAMPLE 2
import React from 'react';

import fetchColors from './fetching.js';

class Colors extends React.Component{
    state = {
        colors: [],
    }

    async componentDidMount(){
        const data = await fetchColors();

        this.setState({colors:data});
    };
    render(){
        if (this.state.colors.length === 0){
            return(
                <h1>LOADING</h1>
                )
        }else{
            return(
                state.colors.map((color)=>{
                    <div>
                        <h1>{color.warm}</h1>
                        <h1>{color.cold}</h1>
                        <h1>{color.primary}</h1>
                        <h1>{color.secondary}</h1>
                    </div>
                })
            )
        }
    }
}
export default Colors;

//EXAMPLE 3
import React from 'react';

import FetchDog from './fetching.js';

class Dogs extends React.Component{
    state={
        dogs: [],
    }

    async componentDidMount(){
        const data = await FetchDog();

        this.setState({dogs:data});
    }

    render(){
        if(this.state.dogs.length === 0){
            return(<h1>CURRENTLY LOADING DOGS</h1>)
        } else{
            return(
                this.state.dogs.map((dog) => {
                    <div>
                        <h1>{dog.breed}</h1>
                        <h1>{dog.age}</h1>
                        <h1>{dog.sex}</h1>
                        <h1>{dog.color}</h1>
                    </div>
                })
            )
        }
    }
}
export default Dogs;

//EXAMPLE 4
import React from 'react';

import fetchSoda from './fetching.js';

class Sodas extends React.component{
    state={
        sodas:[],
    }

    async componentDidMount(){
        const data = await fetchSoda();
        this.setState({sodas:data});
    }

    render(){
        if(this.state.sodas.length === 0){
            return(<h1>LOADING LIST OF SODAS</h1>)
        }else {
            return(
                this.state.sodas.map((soda)=> {
                    <div>
                        <h1>{soda.brand}</h1>
                        <h1>{soda.regularOrDiet}</h1>
                        <h1>{soda.oz}</h1>
                    </div>
                })
            )
        }
    }
}
export default Sodas;

//EXAMPLE 5
import React from 'react';

import fetchAnimes from './fetching.js';

class Animes extends React.Component{
    state={
        animes:[],
    }

    async componentDidMount(){
        const data = await fetchAnimes();
        this.setState({animes:data})
    }

    render() {
        if(this.state.animes.length === 0){
            return(<h1>LOADING ANIME DESU</h1>)
        }else{
            this.state.animes.map((anime)=>{
                <div>
                    <h1>{anime.name}</h1>
                    <h1>{anime.genre}</h1>
                    <h1>{anime.releaseDate}</h1>
                    <h1>{anime.episodeCount}</h1>
                </div>
            })
        }
    }
}
export default Animes;

//example 6
import React from 'react';

import fetchLaptops from './fetching.js';

class Laptops extends React.component{
    state={
        laptops:[],
    }

    async componentDidMount(){
        const data = await fetchLaptops();
        this.setState({laptops:data});
    }

    render(){
        if(this.state.laptops.length === 0){
            <div><h1>GRABBING LAPTOP OPTIONS</h1></div>
        }else{
            this.state.laptops.map((laptop)=>{
                <div>
                    <h1>{laptop.model}</h1>
                    <h1>{laptop.size}</h1>
                    <h1>{laptop.cpu}</h1>
                    <h1>{laptop.ram}</h1>
                    <h1>{laptop.gigabyte}</h1>
                    <h1></h1>
                </div>
            })
        }
    }
    
}
export default Laptops;

//EXAMPLE 7
import React from 'react';

import fetchWatches from './fetching.js';

class Watches extends React.Component{
    state={
        watches:[],
    }

    async componentDidMount(){
        const data = await fetchWatches();
        this.setState({watches:data});
    }

    render(){
        if(this.state.watches === 0){
            return(
                <div><h1>LOADING WATCHES PLEASE WAIT</h1></div>
                )
            }else {
                return(
                    this.state.watch.map((watch)=> {
                        <div>
                            <h1>{watch.brand}</h1>
                            <h1>{watch.kind}</h1>
                            <h1>{watch.value}</h1>
                        </div>
                    })
                )
             }
        }
    }
export default Watches;

//EXAMPLE 8

import React from 'react';
import fetchItems from './fetching.js';

class Items extends React.component{
    state={
        items:[],
    }

    async componentDidMount(){
        const data = await fetchItems();
        this.setState({items:data});
    }
    render(){
        return(
            this.state.items.map((item)=> {
                <div>
                    <h1>{item.something1}</h1>
                    <h1>{item.something2}</h1>
                </div>
            })
        )
    }
}
export default Items;