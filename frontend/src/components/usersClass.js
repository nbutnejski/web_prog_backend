//import React from 'react'
import Users from "./users";

import userService from "../service/userService.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';

class UsersClass extends React.Component {
    constructor(){
        super();
        this.state={
            isLoading:true,
            users:[]
        }
        // this.handleChange=this.handleChange.bind(this)
    }


     componentDidMount() {

        userService.fetchUsers()
            .then(response=>{this.setState({
                users:response.data
            })});
         console.log(this.state.users);

    }
    handleChange(event){
        //[event.target.name]: event.target.value
        const {name,value}= event.target;
        this.setState({
            [name]:value
        })
    }


    render() {
        return( <Users users={this.state.users}/>)
    }
}
export default UsersClass


