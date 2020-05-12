

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';


import adsService from "../../service/adsService";
import OpenAd from "./openAd";
import Footer from "../Footer";
import Header from "../Header";

class OpenAdClass extends React.Component {


    constructor(){
        super();
        this.state={
            isLoading:true,
            ads:[]
        }
        // this.handleChange=this.handleChange.bind(this)
    }


     componentDidMount() {

        adsService.fetchAd(this.props.match.params.uid)
            .then(response=>{this.setState({
                ads:response.data
            })});

    }
    handleChange(event){
        //[event.target.name]: event.target.value
        const {name,value}= event.target;
        this.setState({
            [name]:value
        })
    }


    render() {
        return(
            <div>
                <Header/>
                <OpenAd ad={this.state.ads}/>
                <Footer/>

            </div>
        )
    }
}
export default OpenAdClass


