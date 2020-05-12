

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';


import Footer from "../Footer";
import Header from "../Header";

class NewAdClass extends React.Component {


    constructor(){
        super();
        // this.state={
        //     isLoading:true,
        //     ads:''
        // }
        // this.handleChange=this.handleChange.bind(this)
    }


    componentDidMount() {

        // adsService.fetchAd(this.props.match.params.uid)
        //     .then(response=>{this.setState({
        //         ads:response.data
        //     })});



    }


    render() {
        return(
            <div>
                <Header/>
                <div>

                    <form>
                        <div className="jumbotron container">
                            <div className="row justify-content-center text-center">
                                <div className="col-2 col-offset-5 bg bg-light">
                                    Ime i prezime
                                </div>
                                <div className="col-3 col-offset-5">
                                    <input className="form-control form-inline"/>
                                </div>
                                <div className="col-2 col-offset-5 bg bg-light">
                                    Ime i prezime
                                </div>
                                <div className="col-3 col-offset-5">
                                    <input className="form-control form-inline"/>
                                </div>
                            </div>
                            <br/>           
                            <div className="row justify-content-center text-center">
                                <div className="col-2 col-offset-5 bg ">
                                <button className="form-control btn btn-outline-success">Dodadi oglas</button>
                                </div>

                            </div>
                        </div>

                    </form>

                </div>
                <Footer/>

            </div>
        )
    }
}
export default NewAdClass


