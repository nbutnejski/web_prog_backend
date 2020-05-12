import React from "react"
import App from "../App";

//    <img src="img/as.png" className="rounded-circle  mr-2 " style="width: 40px">

function Header(){
    const dat=new Date();
    const hours=dat.getHours();
    let timeOfDay
    if(hours<12)timeOfDay="Good morning";
    else timeOfDay="Good evening";

    return(
        <div className="mb-0 pb-0 jumbotron p-0 ">

            <nav className="  pb-1 mb-0  navbar navbar-expand-xl navbar-light bg-dark">
                <a className="navbar-brand ml-5 " href="#"
                   style={{color:'white',fontFamily: 'Californian FB', marginRight: 180}}>
                        <span className="pb-4">Огласник.мк</span>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mr-auto">


                        <li className="nav-item active">

                            <a className="nav-link" href="#" onClick={event =>  window.location.href='/'} style={{color:"white"}}>Почетна<span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" style={{marginLeft: 10}}>
                            <a className="nav-link" href="#" onClick={event =>  window.location.href='/ads'} style={{color:"white"}}>Сите Огласи</a>
                        </li>
                        <li className="nav-item asd" style={{marginLeft: 10}}>
                            <a className="nav-link" href="#" data-toggle="popoverNovOglas" title=""
                               data-placement="bottom" data-trigger="hover"
                               data-content="Неопходно е да се најавите за да имате пристап !!!" style={{color:"white"}}
                               data-original-title="Најпрвин најавете се !">Нов Оглас</a>
                        </li>
                        <li className="nav-item active">

                            <a className="nav-link" href="#" onClick={event =>  window.location.href='/users'} style={{color:"white"}}>Корисници<span
                                className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item" style={{marginLeft: 10}}>

                            <a className="nav-link" href="Contact.html" style={{color:"white"}}>Контакт</a>
                        </li>

                    </ul>


                    <span className="ml-3" style={{fontSize: 2, color: '#d9534f', marginLeft: 5}}>

             <a href="#" className="btn text-danger m-0 p-0 pb-2 mr-5" data-toggle="modal"
                           data-target="#loginModal">
                <span className="pr-4" style={{fontSize: 20}}>Log in / Register<span>
            </span></span></a>
        </span>

                </div>
            </nav>

        </div>


    )
}

export default Header;