import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {

	const [characters, setCharacters] = useState([])

	const getCharacter = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/character")
		const body = await response.json()
		console.log(body)
		setCharacters(body.results)
	}

	useEffect(() => {
		getCharacter()
	}, [])

	return (
		<div className="text-center mt-5">
			{characters.map((person) => {
				return (
					<div key={person.id} className="card" style={{ width: "18rem" }}>
						<img src={person.image} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{person.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<Link to={`/details/${person.id}`} className="btn btn-primary">
								Learn more!
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}
