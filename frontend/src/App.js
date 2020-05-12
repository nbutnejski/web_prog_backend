import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';


import userService from "./service/userService";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Switch ,Route}from 'react-router-dom';
import Routes from "./routes";
import UsersClass from "./components/usersClass";
import UsersEditClass from "./components/usersEditClass";

import ShowAdsClass from "./components/ads/showAds";
import OpenAdClass from "./components/ads/openAdClass";
import ToDoForm from "./components/ToDoForm";
import Home from "./components/home";
import NewAdClass from "./components/ads/newAdClass";


class App extends Component {
    // const  jokeComponents= jokesData.filter(x=>x.id>2).map(
    //       joke=>{
    //           return (<Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine }/>)
    //       }
    //   );
    //{jokeComponents}
// {this.state.isLoading ===true ? <h2>Loading...</h2> : <Conditional />}
    constructor(){
        super()
        this.state={
            isLoading:true,
            users:[]
        }
        // this.handleChange=this.handleChange.bind(this)
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
        userService.fetchUsers().then(response=>{this.setState({
            users:response.data
        })})
    }
    handleChange(event){
        //[event.target.name]: event.target.value
        const {name,value}= event.target;
        this.setState({
            [name]:value
        })
    }
// <form>
// <input type="text"  value={this.state.firstName} name="firstName" placeholder={"First name"} onChange={this.handleChange}/>
// <input type="text" value={this.state.lastName} name="lastName" placeholder={"Last name"} onChange={this.handleChange}/>
//
// <h2>{this.state.firstName}</h2>
// <h2>{this.state.lastName}</h2>
// </form>
    render() {
        return (

            <Router>

                    <Route path="/" exact component={Home} />
                    <Route path="/users" exact component={UsersClass} />
                    <Route path="/list" exact component={Footer} />
                    <Route path={"/users/:uid"} exact component ={UsersEditClass} />
                    <Route path={"/newUser"} exact component ={UsersEditClass} />

                    <Route path={"/ads"} exact component ={ShowAdsClass} />
                    <Route path={"/ads/:uid"} exact component={OpenAdClass}  />
                    <Route path={"/newAd"}  exact component={NewAdClass} />

            </Router>

        );
    }

}
export default App;















//
// {/*className="App"*/}
// {/*<header className="App-header">*/}
// {/*  <img src={logo} className="App-logo" alt="logo" />*/}
// {/*  <p>*/}
// {/*    Edit <code>src/App.js</code> and save to reload.*/}
// {/*  </p>*/}
// {/*  <a*/}
// {/*    className="App-link"*/}
// {/*    href="https://reactjs.org"*/}
// {/*    target="_blank"*/}
// {/*    rel="noopener noreferrer"*/}
// {/*  >*/}
// {/*    Learn React*/}
// {/*  </a></header>*/}