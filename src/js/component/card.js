import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
export const Card = (props) => {
    const {store, actions} = useContext(Context);
    
    return (
        <div className="card p-2" style={{minWidth: "300px"}}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">{`${props.endpoint==="people"?`Gender: ${props.item.gender}`:props.endpoint==="planets"?`Diameter: ${props.item.diameter}`:"" }`}</p>
                <p className="card-text">{`${props.endpoint==="people"?`Hair Color: ${props.item.hair_color}`:props.endpoint==="planets"?`Climate: ${props.item.climate}`:"" }`}</p>
                <p className="card-text">{`${props.endpoint==="people"?`Eye Color: ${props.item.eye_color}`:props.endpoint==="planets"?`Terrain: ${props.item.terrain}`:"" }`}</p>
                <div className="d-flex justify-content-between">
                    {props.endpoint==="people" ? (<Link to={`characterinfo/${props.uid}`} className="btn btn-primary">Learn more!</Link>) : (<Link to={`planetinfo/${props.uid}`} className="btn btn-primary">Learn more!</Link>)}
                    <button type="button"  onClick={()=>{
                        let url = `/${props.item.url.replace("https://swapi.dev/api/","")}`
                        if(store && store.favorites.find((favorite, index)=>{return favorite.url===url})){
                            let index = store.favorites.indexOf(store.favorites.find((favorite, index)=>{return favorite.url===url}))
                            actions.removeFavorite(index)
                        }else{
                            actions.addFavorite(props.item.name, url)
                        }
                    }} className="btn btn-outline-warning">
                        {store && store.favorites.find((favorite, index)=>{return favorite.url===`/${props.endpoint}/${props.item.url}`})?(<i className="fas fa-heart text-warning"></i>):(<i className="far fa-heart text-warning"></i>)}
                    </button>
                </div>  
            </div>
        </div>
    )
}
Card.prototype= {
    item:PropTypes.object,
    endpoint:PropTypes.string,
    uid: PropTypes.string,
    
    
}
