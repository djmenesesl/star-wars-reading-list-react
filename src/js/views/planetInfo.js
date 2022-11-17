import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Info } from "../component/info.js";

const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p";


export const PlanetInfo = ()=> {
    const [planet, setPlanet] = useState([])
    const params = useParams()
	const API_URL= "https://www.swapi.tech/api/"
    
    async function getPlanet (id) {
        const response = await fetch(API_URL + `planets/${id}`)
		if (!response.ok) {
            alert("Error en la solicitud")
		}
		const body = await response.json ()
        setPlanet(body.result.properties)
	};

    useEffect(()=> getPlanet(params.id), []);

    return (
        <div>
            <div className="d-flex">
                <img src="https://picsum.photos/500/300" className="m-4"
                alt="..." />
                <div className="mx-4 justify-content-center">
                    <h1 className="text-primary my-3">{planet.name}</h1>
                    <p className="text-primary fs-5">{Lorem} </p>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-4 mx-3 pt-4 border-top border-2 border-danger">
                <Info name="Name" data={planet.name}/>
                <Info name="Climate" data={planet.climate}/>
                <Info name="Population" data={planet.population}/>
                <Info name="Orbital" data={planet.orbital_period} />
                <Info name="Rotation" data={planet.rotation_period}/>
                <Info name="Diameter" data={planet.diameter}/>
            </div>
        </div>
    )
}


