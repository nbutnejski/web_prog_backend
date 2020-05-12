//import React from 'react'
import Users from "./users";

//import Users from "./components/users";
import userService from "../service/userService.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';

class AdsClass extends React.Component {
    constructor(){
        super()
        this.state={
            isLoading:true,
            ads:[]
        }
        // this.handleChange=this.handleChange.bind(this)
    }

    async componentDidMount() {
        //
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading: false
        //     })
        // // },1500);
        // userService.fetchUsers()
        //     .then(res => res.json())
        //     .then(data => this.setState({users: data}))
        //     .catch(console.log)
        userService.fetchUsers().then(response=>{this.setState({
            ads:response.data
        })})
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
export default AdsClass


