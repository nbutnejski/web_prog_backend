import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Popup from "reactjs-popup";
import {Link} from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";



class Ads extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props.ad  );

    }
    render() {
        return(
            <div className="align-items-center align-content-center jumbotron container-fluid pt-1">
                <div className="row  justify-content-center bg-dark p-2  border border-danger rounded  ">
                    <div className=" w-100 col-12 col-md-4 col-lg-3 col-xl-2">
                        <select id="inputState" className=" mb-2 form-control">
                            <option selected="">Марка:</option>
                            <option value="Audi">Ауди</option>
                            <option value="Audi">БМВ</option>
                            <option value="Audi">Волксваген</option>
                            <option value="Audi">Рено</option>
                            <option value="Audi">Масерати</option>
                            <option value="Audi">Мерцедес</option>
                            <option value="Audi">Порше</option>
                            <option value="Audi">Ферари</option>

                        </select>
                        <select  id="inputStatee" className=" disable smb-2 form-control">
                            <option selected="">Модел:</option>
                            <option>Se implemenitra</option>

                        </select>
                    </div>

                    <div className=" w-100 col-12 col-md-4 col-lg-3 col-xl-2">
                        <select id="inputStatee" className=" mb-2 form-control">
                            <option selected="">Година од:</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option> &lt; 2012</option>
                        </select>
                        <select id="inputStatee" className="mb-2 form-control">
                            <option selected="">Година до:</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>&lt;2009</option>

                        </select>
                    </div>

                    <div className=" w-100 col-12 col-md-4 col-lg-3 col-xl-2">
                        <select id="inputStatee" className=" mb-2 form-control">
                            <option selected="">Гориво</option>
                            <option>Бензин</option>
                            <option>Бензин-плин</option>
                            <option>Дизел</option>
                            <option>Хибрид</option>
                            <option>Полу хибрид</option>
                        </select>
                        <select id="inputStatee" className="mb-2 form-control">
                            <option selected="">Регистрација</option>
                            <option>Македонска</option>
                            <option>Странска</option>
                        </select>
                    </div>

                    <div className=" w-100 col-12 col-md-4 col-lg-3 col-xl-2">
                        <select id="inputStatee" className="mb-2 form-control">
                            <option selected="">Километри:</option>
                            <option>0 - 150 000</option>
                            <option>150 000 - 200 000</option>
                            <option>200 000 - 250 000</option>
                            <option>250 000 - 300 000</option>
                            <option>+300 000</option>

                        </select>
                        <select id="inputStatee" className="mb-2 form-control">
                            <option selected="">Менувач:</option>
                            <option>Рачен</option>
                            <option>Полу-автоматски</option>
                            <option>Автоматски</option>

                        </select>
                    </div>

                    <div className=" w-100 col-12 col-md-4 col-lg-3 col-xl-2">
                        <select id="inputStatee" className="mb-2 form-control">
                            <option selected="">Регион</option>
                            <option>Цела Македонија</option>
                            <option>Скопје</option>
                            <option>Тетово</option>
                            <option>Гостивар</option>
                            <option>Прилеп</option>
                            <option>Битола</option>
                            <option>Охрид</option>
                            <option>Гевгелија</option>
                            <option>С.Николе</option>
                            <option>Солун</option>
                            <option>Велес</option>
                        </select>

                        <select id="inputStatee" className="mb-2 form-control">
                            <option selected="">Тип:</option>
                            <option>Автомобил</option>
                            <option>Теренско</option>
                            <option>Автобус</option>
                            <option>Камион</option>

                        </select>
                    </div>


                </div>


                <h4>OGLASI</h4>
                <hr/>

                <div className=" row w-100 container-fluid">

                    <div className="col-8">
                        {
                            this.props.ad.map((ad)=>(

                                <div className="row container m-0 p-0">
                                    <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{backgroundColor:ad.type=='BASIC' ? "#FACABF":"none"}}>
                                        <div className="bg bg-success  " style={{width:400,height:205}}></div>
                                        <div style={{width:430}} className="card-body d-flex flex-column align-items-start">
                                            <strong className=" d-inline-block mb-2 text-primary">basic</strong>
                                            <h3 className="mb-0">
                                                <a className="text-dark" href="#">{ad.title}</a>
                                            </h3>
                                            <div className="mb-1 text-muted">Date: {ad.date_started}</div>
                                            <p className="card-text mb-auto" >{ad.description} </p>
                                            <button onClick={event =>  window.location.href='/ads/'+ad.id} className=" p-0 btn btn-block  btn-outline-info"> Vidi go oglasot</button>

                                        </div>
                                    </div>
                                </div>

                            ))
                        }


                    </div>


                    <div className="col-4 border border-info">
                    <div className="naum " style={{width:20,height:30}}> gfdgf</div></div>

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

export default Ads


        //
        // <!--range slicer-->
        //
        // <label htmlFor="amount">Цена по избор:</label>
        //
        // <div className="w-100 bg-danger" id="slider-range"></div>
        // <input className="form-control" type="text" id="amount" readOnly=""
        // style="border:0; color:#f6931f; font-weight:bold;">
        //
        // <!--range slider end-->



//
//
//
//
//
//
//
//
// <div className="row container w-100 bg-success">
//
//     <div className="col-8 m-0 p-0">
//
//     <div className="aaa row   pt-2 pb-2"
// style={{borderStyle:'solid',borderBottomStyle: 'groove',borderTopStyle: 'outset',backgroundColor: '#F9E6E1'}}>
// <div className="col-5 ">
//     <img className="w-100 rounded "
// src="img/used-2017-porsche-911-turboscabriolet-9871-16821015-1-640.jpg"/>
//     </div>
// <div className="col-6">
//     <label className="  float-right  mr-0  pr-1"
//            style={{position: 'static',color: 'darkslategray'}}> 09.09.2019</label>
//
//     <h5>Porsche 4s - 1.5 TDS 4x4 110hp </h5>
//     <p className="d-none d-sm-none d-lg-block d-xl-block d-md-block">Baba go vozela,
//         proizveden 1999 ...
//     </p>
//     <hr/>
//     <div className="">
//         <label>Година: 2002</label> |
//         <label>Километража: 156 000</label>
//     </div>
//     <hr/>
//     <button className="btn-sm btn-primary btn-small">Повеќе информации&gt;</button>
//     <label className="float-right">Цена: 12 400 €</label>
//     <p></p>
//
// </div>
// </div>
//
//
// </div>
// </div>
