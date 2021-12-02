import React from 'react';
import './Header.css';
import logo from '../../../Imagen/logo.jpeg';


export const Header1 = () =>{
    return(
    <>
        <div className="logo">
            <div className="Header">
                <img className="logo1" src={logo} alt="React" />
            </div>
        </div>

    </>

    )
}
