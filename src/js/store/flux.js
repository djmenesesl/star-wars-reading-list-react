const BASE_URL_API = "https://swapi.dev/api"
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
			]
		},
		actions: {
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
			},
			getInfoCharacters: async () => {
				let response = await fetch (`${BASE_URL_API}/people`);
				if (response.ok){
					let body= await response.json()
					setStore({infoCharacters:body.results})
				}
			},
			getInfoPlanets: async () => {
				let response = await fetch (`${BASE_URL_API}/planets`);
				if (response.ok){
					let body= await response.json()
					setStore({infoPlanets:body.results})
				}
			}
		}
	};
};

export default getState;
