import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
export const Card = (props) => {
    const {store, actions} = useContext(Context);
    
    return (
        <div className="card p-2" style={{minWidth: "300px"}}>
            {props.endpoint==="people" ? (<img src={`https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`} className="card-img-top" alt="..."/>) : (<img src={`https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`} className="card-img-top" alt="..."/>)}
            
            
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                             
                
                <div className="d-flex justify-content-between">
                    {props.endpoint==="people" ? (<Link to={`people/${props.item.uid}`} className="btn btn-primary">Learn more!</Link>) : (<Link to={`planets/${props.item.uid}`} className="btn btn-primary">Learn more!</Link>)}
                    <button type="button"  onClick={()=>{
                        let url = `/${props.item.url.replace("https://www.swapi.tech/api/","")}`
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
