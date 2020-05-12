import React  from "react";
import Popup from "reactjs-popup";
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import userService from "../service/userService";


class Users extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props.users);
        this.delelting=this.delelting.bind();
    }
    delelting(event){
       // this.userService.deleteUser();
        if(window.confirm("You will delete selected user, are you sure ? ")){
            userService.deleteUser(event).then(x=>{ window.location.href='/users'});
        }
    }

    render() {
        return(

            <div>

                <Header/>
                <div  style={{height:520}} className="p-0 m-0 jumbotron pt-3 ">


                    <div style={{minHeight:300}} className="container jumbotron bg-light p-2">
                        <div className=" row p-0  m-0  w-100">
                            <h3 className=" col-5">List of users  | Current: <u>_{this.props.users.length}_</u> </h3>
                            <input  placeholder=" Search by username or email"  className="form-control w-50 ml-2 mr-2 col-2 "/>
                            <input  placeholder=" Search by email"  className="form-control w-50 ml-2 mr-2 col-2 "/>
                            <button className="btn btn-success   ml-2">Search</button>
                            <button onClick={event =>  window.location.href='/newUser'} className="btn btn-success btn-outline-danger ml-2">Add new user</button>
                        </div>

                        <div className="   row form-inline  align-content-center align-items-center justify-content-center">
                            {
                                this.props.users.map((user)=>(
                                    <div className="card col-3 w-25 m-2">
                                        <div className="card-body">
                                            <h5 className="card-title">User: <u> {user.username} </u></h5>
                                            <div className="card-text">Email: {user.email!=null ? user.email : 'no email'}</div>
                                        </div>

                                        <button onClick={event =>  window.location.href='/users/'+user.id} className="btn btn-block btn-outline-dark"> Edit user</button>
                                        <button onClick={event =>this.delelting(user.id)} className="btn btn-block btn-outline-danger"> Remove user</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Footer/>

                </div>
            </div>

        )
    }


}













//
//
//
// const Users=({users})=>{
//     console.log(users.username);
//
//
//
//
//     return(
//
//     )
// }

export default Users