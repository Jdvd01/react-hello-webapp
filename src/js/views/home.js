import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

import { Context } from "./../store/appContext.js"

export const Home = () => {

	const { store, actions } = useContext(Context)


	// const [characters, setCharacters] = useState([])
	console.log(store)

	useEffect(() => {
		// actions.getCharacter()
		// getCharacter()
	}, [])

	return (
		<div className="text-center mt-5">
			{store.characters.map((person) => {
				console.log(person)
				const { id, image, name, location } = person
				return (
					<div key={id} className="card" style={{ width: "18rem" }}>
						<img src={image} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{name}</h5>
							<p className="card-text">{location.name}</p>
							<Link to={`/details/${id}`} className="btn btn-primary">
								Learn more!
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}
