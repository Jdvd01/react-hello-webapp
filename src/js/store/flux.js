const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: []
		},
		actions: {

			getCharacter: async () => {
				const store = getStore()
				const response = await fetch("https://rickandmortyapi.com/api/character")
				const body = await response.json()
				console.log("Respuesta de la solicitud desde el flux", body)
				// setCharacters(body.results)

				setStore({ characters: body.results })
			},


			getSingleCharacter: (idDelPersonaje) => {
				// console.log("ID DESDE EL FLUX", idDelPersonaje)
				// fetch("https://rickandmortyapi.com/api/character/" + idDelPersonaje)
				// .then((response) => response.json())
				// .then((data) => console.log(data))
			},





			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
