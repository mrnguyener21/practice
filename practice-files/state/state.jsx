//basic boilet plate of class component with a state

export default App;

// example 1
// Below is a simple example of state where state has a property of counter and by clicking on a certain button it will either go up or down by 1
import React from 'react';

class App extends React.Component{
    state={
        counter:0,
    }
    
    increase= this.setState(this.state.counter +1);
    decrease = this.setState(this.state.counter -1) 

    render(){
        return(
            <>
                <button onClick={increase}>PRESS TO ADD 1</button>
                <button onclick={decrease}>PRESS TO SUBTRACT 1</button>
            </>
        )
    }
}
export default App;

// example 2
// Here we are using state to display an image of rock, paper or scissor depending on which button you choose to click

import React from 'react';
// the imported imaages below are just examples not a real import
import rock from './image/rock.jpg';
import paper from './image/paper.jpg';
import scissor from './image/scissor.jpg';

class rockPaperScissor extends React.Component{
    state={
        choice: '',
    }

    rock = this.setState(this.state.choice = <img src={rock} alt='rock'/>);
    paper = this.setState(this.state.choice = <img src={paper} alt='paper'/>);
    scissor  = this.setState(this.state.choice = <img src={scissor} alt='scissor'/>); 

    render(){
        return(
            <>
                <h1>{this.state.choice}</h1>
                <button onClick={rock}>ROCK</button>
                <button onClick={paper}>PAPER</button>
                <button onClick={paper}>SCISSOR</button>
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
    doctor= this.setState(
        this.state.image = <img src={doctor} alt='doctor'/>,
        this.state.name = 'KEVIN NGUYEN',
        this.setState.occupation = 'DOCTOR',
    )

    nurse= this.setState(
        this.state.image = <img src={nurse} alt='nurse'/>,
        this.state.name = 'HENRY SMITH',
        this.setState.occupation = 'NURSE',
    )

    pharmacist= this.setState(
        this.state.image = <img src={pharmacist} alt='pharmacist'/>,
        this.state.name = 'ANDY LE',
        this.setState.occupation = 'PHARMACIST',
    )
    render(){
        return(
            <>
                <button onClick ={doctor}>DOCTOR</button>
                <button onClick ={nurse}>NURSE</button>
                <button onClick ={pharmacist}>PHARMACIST</button>
            </>
        )
    }
}

export default ID;