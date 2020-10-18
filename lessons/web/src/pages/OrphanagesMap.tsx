import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

import mapIcon from "../utils/mapIcon";
import api from "../services/api"

import BigSidebar from  '../components/BigSidebar'
import {user_is_orphanage} from  '../components/BigSidebar'

interface Orphanage{
    id: number
    latitude: number
    longitude: number
    name: string
}


function OrphanagesMap(){

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, [])

    return(
        <div id="page-map">

            <BigSidebar
                title={"Traga mais vizitantes para o seu orfanato"}
                subTitle={"Esses são alguns orfanatos já cadastrados no nosso site. Cadastre um novo orfanato no botão +"}
                user_is_orphanage={user_is_orphanage}
            />
                                        
            <Map 
                center={[-17.5311409,-39.2125799]}
                zoom={15}
                style={{ width:'100%', height: '100%' }}
            >

            <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
            />

            {orphanages.map(orphanage => {
                return(
                    <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                        
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup"> 
                            {orphanage.name}
                            
                            <Link to={`orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#FFF"/>
                                
                            </Link>
                        </Popup>
                    </Marker>
                )
            })}
            </Map>
            
            { user_is_orphanage ? 
                <Link to="/orphanages/create" className="create-orphanage">
                    <FiPlus size={32} color='#FFF'/>
                </Link> 
                : null }
            

            

        </div>
    )
}

export default OrphanagesMap