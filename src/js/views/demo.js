import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p";

export const CharacterProfile = (props) => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({})
	const params = useParams();

	const getInfoCharacters = async () => {
		const character = await actions.getInfoCharacters(`/people/${params.id}`)
		setCharacter(character.properties)
	}

	useEffect(() => {
		getInfoCharacters()
	},[])
	
	return (
		<div className="jumbotron character-container">
			<>
				<div className="container text-center">
					<div className="row">
						<div className="col image">
						<img src="https://picsum.photos/400/200" className="card-img-top" alt="..."/>
						</div>
						<div className="col">
							<div className="text-start">
								<h1>{store.infoCharacters?.name}</h1>
								<p>{Lorem}</p>
							</div>
						</div>
					</div>
				</div>
				<hr className="mt-4 mb-2" style={{color:'red', height:'2px'}}/>
				<div className="container text-center mb-4" style={{color:'red'}}>
					<div className="row">
						<div className="col-2 justify-content-evenly">
							<div>Name</div>
							<div>{character.name}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Birth</div>
							<div>{character.birth_year}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Gender</div>
							<div>{character.gender}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Height</div>
							<div>{character.height}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Skin color</div>
							<div>{character.skin_color}</div>
						</div>
						<div className="col-2 justify-content-evenly">
							<div>Eye color</div>
							<div>{character.eye_color}</div>
						</div>
					</div>
				</div>
			</>

			<div style={{width:'100%', display:'flex', justifyContent:'center'}}>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};


