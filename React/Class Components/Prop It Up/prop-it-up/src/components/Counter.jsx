import React, { Component } from 'react';

export class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : this.props.age
        }
        
    }
    

    render(){
        const addCount = ()=>{
            this.setState({count: this.state.count + 1})
        }

        return(
            <div>
                <h1>Age: {this.state.count}</h1>
                <button onClick={addCount}>Its your Birthday</button>
            </div>
        );
    }
}


export default Counter;
