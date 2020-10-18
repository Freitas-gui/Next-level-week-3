import React, { useState, useEffect } from 'react';

import {BsPersonFill} from 'react-icons/bs'
import {GiFamilyHouse} from 'react-icons/gi'
import {Link} from 'react-router-dom'

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg'


import {isOrphanage, isVisitor} from  '../components/BigSidebar'



function Landing(){

    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="happy"/>
                <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>
                Visite orfanatos e mude o dia de muitas crianças.
                </p>
                </main>
                
                <div className="location">
                <strong>Alcobaça</strong>
                <span>Bahia</span>
                </div>
                
                
                    {<Link to={"/app"} onClick={isOrphanage} className="enter-app-orphanage" >
                        <GiFamilyHouse size={26} color="rgba(0, 0, 0, 0.6)"/>
                            <p>Entrar como orfanato</p>
                    </Link>}
                

                
                   <Link to={"/app"} onClick={isVisitor} className="enter-app-visitor" >
                        <BsPersonFill size={26} color="rgba(0, 0, 0, 0.6)"/>
                            <p>Entrar como visitante</p> 
                    </Link>
               
               

            </div>
        </div>
    )
}

export default Landing 