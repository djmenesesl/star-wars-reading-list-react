import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store} = useContext(Context)

	return (<div className="container">
		<h1 className="text-danger">
			Characters
		</h1>
		<div className="d-flex flex-row flex-nowrap overflow-auto">
			{store.infoCharacters && store.infoCharacters.map((character, index)=> {
				return <Card key={index} item = {character} endpoint = "people"/>
			})}
		</div>
	</div>
	)
};
