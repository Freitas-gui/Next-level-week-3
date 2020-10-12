import React from "react"
import {Link} from "react-router-dom"
import {FiPlus} from 'react-icons/fi'

import mapMarkerImg from '../images/map-marker.svg'

function OrphanagesMap(){
    return(
        <div id="oage-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um ordanato do mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Alcobaça</strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            <div></div>
            
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color='#FFF'/>
            </Link>

        </div>
    )
}

export default OrphanagesMap