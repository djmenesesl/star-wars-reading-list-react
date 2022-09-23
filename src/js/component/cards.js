import React from "react";
import PropTypes from "prop-types";
export const Cards = (props) => {
    return (
        <div className="card p-2" style={{minWidth: "300px"}}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Population: {props.item.population}</p>
                <p className="card-text">Terrain: {props.item.terrain}</p>
                <a href="#" className="btn btn-primary">Learn more!</a>
                <button type="button" class="btn btn-outline-warning">&hearts;</button>
                
            </div>
        </div>
    )
}
Cards.prototype= {
    item:PropTypes.object,
    planets:PropTypes.string
}