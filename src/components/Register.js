import React, {Component} from 'react';

const initState = {
    username: "",
    email: "",
    password:"",
};


export default class Register extends Component{


    constructor(props){

    super(props);
    this.state= {
        ...initState,

    }
}

submitHandler = (event) => {
    event.preventDefault();
    
    let config = {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(this.state),

    };

    fetch('http://reactcourseapi.herokuapp.com/user/register', config)
        .then(res => res.json())
        .then(data =>{
            console.log('Exito!!')
            localStorage.setItem('token', data.token)
            this.setState({...initState})
        })
        .catch(err =>{
            console.log(err);
            
        })
}


changeHandler = (event) => {
    this.setState({
        [event.target.id]: event.target.value,
    })
}


    render(){
        return(
        
            <form onSubmit= {this.submitHandler}>
                <label> Username: 
                    <input type= "text" id= "username" onChange = {this.changeHandler} value= {this.state.username}></input>
                </label>

                <label> Email: 
                <input type= "text" id= "email"  onChange = {this.changeHandler} value= {this.state.email}></input>

                </label>

                <label> Password: 
                <input type= "password" id= "password"  onChange = {this.changeHandler} value= {this.state.password}></input>

                </label>

                <button type="submit" onClick= {this.submitHandler} > Submit </button>
            
            </form>
        );
    }
}