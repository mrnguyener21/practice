//basic boilet plate of class component with a state

export default App;

// example 1
// Below is a simple example of state where state has a property of counter and by clicking on a certain button it will either go up or down by 1
import React from 'react';

class App extends React.Component{
    state = {
        counter: 0,
    }

    increase = () => this.setState({ counter: this.state.counter + 1 }); // take a look later
    decrease = () => this.setState({ counter: this.state.counter - 1 }); // take a look later
    
    render(){
        return(
            <>
                <button onClick={this.increase}>PRESS TO ADD 1</button>
                <button onclick={this.decrease}>PRESS TO SUBTRACT 1</button>
            </>
        )
    }
}
//remember with class base components to use this.blach blach blach
export default App;

// example 2
// Here we are using state to display an image of rock, paper or scissor depending on which button you choose to click

import React from 'react';
// the imported imaages below are just examples not a real import
import rock from './image/rock.jpg';
import paper from './image/paper.jpg';
import scissor from './image/scissor.jpg';

class rockPaperScissor extends React.Component{
    state = {
        choice: '',
    }

    render(){
        return(
            <>
                {this.state.choice ? <img src={this.state.choice} /> : null}
                <button onClick={() => this.setState({ choice: 'rock' })}>ROCK</button>
                <button onClick={() => this.setState({ choice: 'paper' })}>PAPER</button>
                <button onClick={() => this.setState({ choice: 'scissor' })}>SCISSOR</button>
            </>
        )
    }
}

export default rockPaperScissor;

// example 3
// Here we are using state to cycle through different IDs of employees from a hospital
import React from 'react';
//image imports below are just examples not real imports
import unknown from './images/unknown.jpg';
import doctor from './images/doctor.jpg';
import nurse from './images/nurse.jpg';
import pharmacist from './images/pharmacist.jpg';

class ID extends React.Component{
    state={
        image: <img src={unknown} alt='unknown'/>,
        name: 'NAME',
        occupation: 'OCCUPATION',
    }

    doctor= ()=> this.setState({ image: 'test', name: 'KEVIN NGUYEN', occupation:'DOCTOR'})

    nurse= ()=> this.setState(
        this.state.image = <img src={nurse} alt='nurse'/>,
        this.state.name = 'HENRY SMITH',
        this.setState.occupation = 'NURSE',
    )

    pharmacist=()=>  this.setState(
        this.state.image = <img src={pharmacist} alt='pharmacist'/>,
        this.state.name = 'ANDY LE',
        this.setState.occupation = 'PHARMACIST',
    )
    
    render(){
        return(
            <>
                <button onClick ={this.doctor}>DOCTOR</button>
                <button onClick ={this.nurse}>NURSE</button>
                <button onClick ={this.pharmacist}>PHARMACIST</button>
                <div>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.occupation}</h1>
                    <img src={this.state.image} />
                </div>

            </>
        )
    }
}

export default ID;