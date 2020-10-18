import { title } from 'process';
import React, { Component } from 'react'
import mapMarkerImg from '../images/map-marker.svg';


interface MyComponentProps{
    title:string
    subTitle:string
    user_is_orphanage : boolean
}

export var user_is_orphanage :boolean

export function isOrphanage(){
    user_is_orphanage=true
}
export function isVisitor(){
    user_is_orphanage=false
}
  
export default class BigSidebar extends React.Component<MyComponentProps> {

      
    render() {
        return(
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    { this.props.user_is_orphanage ? 
                        <div><h2>Traga mais vizitantes para o seu orfanato</h2>
                        <p>Esses são alguns orfanatos já cadastrados no nosso site. Cadastre um novo orfanato no botão +</p></div>
                    : 
                        <div><h2>Escolha um orfanato do mapa</h2>
                        <p>Muitas crianças estão esperando a sua visita :)</p> </div>
                    }
                </header>

                <footer>
                    <strong>Alcobaça</strong>
                    <span>Bahia</span>
                </footer>
            </aside>
        )
    }
}
