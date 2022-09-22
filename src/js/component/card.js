import React from "react";
import PropTypes from "prop-types";
export const Card = (props) => {
    return (
        <div className="card p-2" style={{minWidth: "300px"}}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">Gender {props.item.gender}</p>
            <p className="card-text">Hair Color {props.item.hair_color}</p>
            <p className="card-text">Eye Color {props.item.eye_color}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
</div>
    )
}
Card.prototype= {
    item:PropTypes.object,
    people:PropTypes.string
}