import React from "react"
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"

export const Info = (props)=> {
    const params = useParams()
    return (
        <div className="text-center container rounded p-3">
            <div className="card text-primary " style={{width: "18rem;"}}>
                <div class="card-header fw-bold fs-4">
                    {props.name}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-primary fs-5">{props.data}</li>
                    
                </ul>
            </div>
            
        </div>
    )
    
};
Info.propTypes = {
    data: PropTypes.string,
    name: PropTypes.string,
    
}