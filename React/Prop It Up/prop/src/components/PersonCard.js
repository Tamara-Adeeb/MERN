import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }
    
    birthday = () => {
        if(this.state.age >= 100){
            this.setState({age: this.state.age})  
            
        }
        else {
        this.setState({age: this.state.age +1})
        }
    };

    alive = () => {
        if(this.state.age >= 100){
        return <p>{this.props.firstName} {this.props.lastName} "is died"</p>;   
    }
    }

    render(){
        
        const {firstName, lastName, color} = this.props;
        return (
        <div><h1> {firstName}, {lastName}</h1>
        <p> Age: {this.state.age} </p>
        {this.alive()}
        <p> Hair Color: {color} </p>
        
        <button onClick={this.birthday}> Birthday Button for {firstName} {lastName}</button>
        </div>
        );
    }
}

export default PersonCard;