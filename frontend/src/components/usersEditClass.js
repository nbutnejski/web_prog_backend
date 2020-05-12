//import React from 'react'
import Users from "./users";

//import Users from "./components/users";
import userService from "../service/userService.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import UsersEdit from "./usersEdit";
import Header from "./Header";
import Footer from "./Footer";

class UsersEditClass extends React.Component {
    constructor(){
        super();
        this.state={
            isLoading:true,
            users:'',
            usersInfo:[],
            username:'',
            password:'',
            fullname:'',
            date_created:'',
            id:'',
            email:''
        };
         this.handleChange=this.handleChange.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }


    componentDidMount() {
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
        userService.fetchUser(this.props.match.params.uid)
            .then(response=>{this.setState({
                users:response.data,
                usersInfo:response.data.users,
                isLoading:true,
                username:response.data.username,
                password:response.data.password,
                fullname:'',
                date_created:'22.04.2014', //response.data.username
                id:response.data.id,
                email:response.data.email
            })});

    }
    handleChange(event){

        this.setState({
            [event.target.name]:event.target.value
        });
     //   alert(event.target.name)
    }

    handleSubmit ( event ) {
        event.preventDefault();
        alert(this.state.id)
        console.log("TU SAM");
       // alert(this.state.username)
        userService.createNewUser(this.state.username,this.state.password,this.state.id,this.state.email).then(r =>
            console.log(r + "jnfksdm"));
        alert("Uspesno socuvano")
    }

    render() {
        return(
            <div>

                <Header/>

                <div className="container jumbotron  justify-content-center align-content-center text-center align-items-center">
                    <form onSubmit={this.handleSubmit} className="  pb-0 mb-0 container jumbotron  justify-content-center align-content-center text-center align-items-center">
                        <h3>Editing user</h3>
                        <div className=" row   justify-content-center align-content-center text-center align-items-center">
                            <div className="col-4 ">
                                <label className="col-2 float-left">Name:</label>
                                <input
                                    className="form-control"
                                    name={"username"}
                                    placeholder={"Username"}
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="col-4 ">
                                <label className="col-2 float-left">Surname:</label>
                                <input
                                    className="form-control"
                                    name={"username"}
                                    placeholder={"Username"}
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="col-4 ">
                                <label className="col-2 float-left">Email:</label>
                                <input
                                    className="form-control"
                                    name={"email"}
                                    placeholder={"Username"}
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="col-3 ">
                                <label className="col-2 float-left">Password:</label>
                                <input
                                    className="form-control"
                                    name={"username"}
                                    placeholder={"Username"}
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />

                            </div>

                            <div className="col-3 ">
                                <label className="col-2 float-left">Password:</label>
                                <input
                                    className="form-control"
                                    name={"username"}
                                    placeholder={"Username"}
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="col-3 ">
                                <label className="col-2 float-left">Created:</label>
                                <input
                                    className="form-control"
                                    disabled='true'
                                    name='asd'
                                    placeholder={this.state.date_created}
                                    value={this.state.date_created}
                                />

                            </div>




                        </div>

                        <hr/>
                        <button className="col-3 m-2 btn btn-success">Save</button>

                    </form>

                    <div className=" justify-content-center">
                        <button onClick={event =>  window.location.href='/users/'} className="col-3 m-2 btn btn-dark ">Back</button>
                    </div>
                    <div className="row  justify-content-center">
                        <label className=" text-danger">* Оnce saved changes cannot be restored *</label>

                    </div>
                </div>

                <div>


                </div>


                <Footer/>
            </div>



            )
    }
}
export default UsersEditClass



//<UsersEdit user={this.state.users} />
