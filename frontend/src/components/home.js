import React from "react"
import App from "../App";
import Slider from "reactrangeslider";
import Header from "./Header";
import Footer from "./Footer";



function Home(){

    return(
        <div className="mb-0 pb-0 jumbotron p-0 ">

            <Header/>


            <div>


                <div className="row ml-5 mt-5 ">
                    <h3>Stranata e seuste vo izrabotka :(</h3>
                </div>
                    <div className="row p-4 m-4">


                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">News about vehicles</h4>
                                    <p className="card-text">Today’s Motor Vehicles covers the latest news, equipment and information in the motor vehicle manufacturing industry ...</p>
                                    <a href="https://www.todaysmotorvehicles.com/page/about-us/" className="btn btn-primary">View more about this</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">TOP 15 Hybrid cars for 2020</h5>
                                    <p className="card-text">Hybrid electric vehicles are powered by an internal combustion engine and an electric motor, which uses energy stored in batteries. A hybrid electric vehicle ...</p>
                                    <a href="https://www.carmax.com/articles/best-hybrid-cars" className="btn btn-primary">View more about this</a>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>



            <Footer/>
        </div>


    )
}

export default Home;