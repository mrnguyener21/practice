//basic boilet plate of class component with a state
import React from 'react';

class App extends React.Component{
    state={
        counter:0,
    }

    method = () => {
        this.setState({counter:this.state.counter = 1})
    }

    render(){
        return(
            <div>
                <h1>TEST</h1>
            </div>
        )
    }
}

export default App;