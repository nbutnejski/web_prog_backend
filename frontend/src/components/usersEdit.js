import React  from "react";

import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


class UsersEdit extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            password:""
        };

        this.handleChange=this.handleChange.bind(this);

    }

    componentDidMount() {
        this.setState({
            username:this.props.user.username,
            password:this.props.user.password
        });

    }






    handleBack() {
        this.props.history.push('/');
    }
    handleChange(event){

        this.setState({
            [event.target.name]:event.target.value
        });
        alert(event.target.name)
}
    render() {
        return(
            <div>
                <Header/>

                <div className="container jumbotron  justify-content-center align-content-center text-center align-items-center">
                    <form className="  pb-0 mb-0 container jumbotron  justify-content-center align-content-center text-center align-items-center">
                    <h3>Editing user</h3>
                    <div className=" row   justify-content-center align-content-center text-center align-items-center">
                        <div className="col-4 ">
                            <label className="col-2 float-left">Name:</label>
                            <input
                                className="form-control"
                                name={"this.props.user.username"}
                                placeholder={"Username"}
                                value={this.state.username}
                                onChange={this.handleChange}

                            />

                        </div>
                        <div className="col-4 ">
                            <label className="col-2 float-left">Surname:</label>
                            <input
                                className="form-control"
                                name="Surname"
                                placeholder="Surname"
                                defaultValue={this.state.username}
                                onChange={this.handleChange}

                            />

                        </div>
                        <div className="col-4 ">
                            <label className="col-2 float-left">Username:</label>
                            <input
                                className="form-control"
                                name="username"
                                placeholder="Username"
                                defaultValue='123456'
                                value=''
                                onChange={this.handleChange}

                            />

                        </div>
                        <div className="col-4 ">
                            <label className="col-2 float-left">Password:</label>
                            <input
                                className="form-control"
                                name="username"
                                placeholder="Username"
                                defaultValue={this.state.username}
                                value={this.props.user.password}
                                onChange={this.handleChange}

                            />

                        </div>

                        <div className="col-4 ">
                            <label className="col-2 float-left">Password:</label>
                            <input
                                className="form-control"
                                name="username"
                                placeholder="Username"
                                defaultValue={this.state.username}
                                value={this.props.user.password}
                                onChange={this.handleChange}

                            />

                        </div>
                        <div className="col-4 ">
                            <label className="col-2 float-left">Password:</label>
                            <input
                                className="form-control"
                                name="username"
                                placeholder="Username"
                                defaultValue={this.state.username}
                                value={this.props.user.password}
                                onChange={this.handleChange}

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
//
// <span>{this.props.user.username}</span>
export default UsersEdit


