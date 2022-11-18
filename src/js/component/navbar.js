import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		
	<nav className="navbar navbar-light bg-light mb-3">
		<Link to="/">
		<img className="ms-5 brand" style={{width: 50, height: 50}} src="https://i.pinimg.com/originals/88/d6/12/88d6120b4fba53792b41b02010dde964.jpg" alt="logo-starwars"></img>
		</Link>
		<div className="ml-auto">
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				>
				Favorites <span className="badge bg-secondary">
				{store.favorites.length}
				</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.map((favorite, index)=>{
						return (
							<li className="d-flex align-item-center" key={index}>
								<Link to={favorite.url} className="dropdown-item">
									{favorite.name}
								</Link>
								<i className="fas fa-trash" onClick={()=>{actions.removeFavorite(index)}}></i>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	</nav>
	);
};


