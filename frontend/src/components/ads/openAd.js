import React  from "react";

import Header from "../Header";
import Footer from "../Footer";
class OpenAd extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            ad:'',
            user:''
        }
    }
    componentDidMount() {
        this.setState(() => ({
            ad:this.props.ad,
            user:this.props.ad.user
        }));
        // userite ne mozam da gi citam iako preku kontrolerot se dobiva celosen json


    }

//
// <div className="row w-100">
// <div className="col-8"><h2 className="float-left">Title: {this.state.ad.title} </h2>
// </div>
// <div className="col-3">
// <h5 className="float-right">Lice za kontakt:  { this.state.user ?this.state.user.username:""} </h5>
// </div>
// </div>



    render() {
        return(
            <div className="bg-light p-3 m-0">
                <div className=" jumbotron  container align-content-center align-items-center justify-content-center">

                    <div className="d-inline">
                    <h5 className="float-left">Informacii:</h5>
                    <button style={{width:200}} className=" m-3 btn btn-outline-success float-right"> Nazad</button>

                    </div>

                    <div className="row w-100 border border-white   align-content-center align-items-center justify-content-center">
                        <div className="col-7"><h2 className="float-left">Title:  { this.props.ad.title} </h2>
                        </div>
                        <div className="col-4">
                            <h5 className="float-right">Lice za kontakt: _____________ </h5>
                        </div>


                    </div>


                    <br/>
                    <div className="row w-100 border border-white   align-content-center align-items-center justify-content-center">


                        <div className="col-4"> <h3>Price: {this.props.ad.about_price != null ? this.props.ad.about_price.length: "Po dogovor" }</h3></div>
                        <div className="col-4"><h3>Carosery: {this.props.ad.carosery}</h3></div>
                        <div className="col-4"><h3>Color: {this.props.ad.color} </h3></div>
                    </div>
                    <div className="row w-100 border border-white   align-content-center align-items-center justify-content-center">
                        <div className="col-2">Emmision: {this.props.ad.ems}</div>
                        <div className="col-2">Engine: {this.props.ad.eng_type}</div>
                        <div className="col-2">Gearbox: {this.props.ad.gearbox}</div>
                        <div className="col-2">Year: {this.props.ad.godina_proizvod}</div>

                    </div>

                </div>

                <h4>IMAGES:</h4>

                <div className=" jumbotron  container align-content-center align-items-center justify-content-center">
                    <div className="row m-auto html-editor-align-center align-content-center align-items-center justify-content-center">
                        <img src={this.props.ad.image} />
                    </div>
                </div>



            </div>

        )
    }


}
//
// <span>{this.props.user.username}</span>
export default OpenAd


