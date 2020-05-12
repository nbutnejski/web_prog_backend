//import React from 'react'



import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import adsService from "../../service/adsService";
import Ads from "./ads";


class ShowAdsClass extends React.Component {
    constructor(){
        super();
        this.state={
            isLoaded:false,
            ads:[],
        }
        // this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount() {

        setTimeout(function() { //Start the timer
            adsService.fetchAds()
                .then(response=>this.setState({
                    ads:response.data,
                }));

            this.setState({isLoaded: true}) //After 1 second, set render to true
        }.bind(this), 1500);
        console.log(this.state.ads.user)
    }

    handleChange(event){
        //[event.target.name]: event.target.value
        const {name,value}= event.target;
        this.setState({
            [name]:value
        })
    }


    render() {
        if(!this.state.isLoaded){
            return (<h2  className="bg-dark text-light p-4 m-4">Loading...<br/> Just a second please :) </h2>)
        }
        else{

        return(
            <div>
                <Header/>
                <div  style={{minHeight:400}}>
                    <Ads ad={this.state.ads}/>
                </div>
                <Footer/>
            </div>

        )
        }
    }
}
export default ShowAdsClass


