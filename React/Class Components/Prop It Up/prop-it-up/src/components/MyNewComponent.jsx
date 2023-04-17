import React, { Component } from 'react';

class PersonCard extends Component{

    render(){
        return(
            <div>
                <h1>First Name: {this.props.firstName}</h1> 
                <h1>Last Name: {this.props.lastName}</h1>
                <h1>Hair Color: {this.props.hairColor}</h1>
            </div>
        );
    }
}


export default PersonCard;
