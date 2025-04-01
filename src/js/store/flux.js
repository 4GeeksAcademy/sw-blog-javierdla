import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			learnMorePeople: [],
			learnMoreVehicles: [],
			learnMorePlanets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");

					const data = await response.json();

					if (response) setStore({ people: data.results });


				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				try {

					const response = await fetch("https://www.swapi.tech/api/planets");

					const data = await response.json();

					if (response) setStore({ planets: data.results });


				} catch (error) {
					console.log(error);
				}
			},

			getVehicles: async () => {
				try {

					const response = await fetch("https://www.swapi.tech/api/vehicles");

					const data = await response.json();

					if (response) setStore({ vehicles: data.results });


				} catch (error) {
					console.log(error);
				}
			},

			putLearnMorePeople: (object) => {


				setStore({ learnMorePeople: object });

			},

			putLearnMoreVehicles: (object) => {


				setStore({ learnMoreVehicles: object });

			},

			putLearnMorePlanets: (object) => {


				setStore({ learnMorePlanets: object });

			},

			addFavorites: (favoriteName) => {

				let copiaFavorite = getStore().favorites;

				copiaFavorite.push(favoriteName);

				let filtredList = [...new Set(copiaFavorite)]; // Array que elimina los duplicados

				setStore({ favorites: filtredList });

			},

			deleteFavorites: (favoriteName) => {

				let Favorites = getStore().favorites;

				//Declaro un nuevo array para guardar un array con los nuevos elementos
				let favoritesDelete = Favorites.filter((oneFavorite) => oneFavorite !== favoriteName);

				setStore({ favorites: favoritesDelete });
			}
		}
	};
};

export default getState;
