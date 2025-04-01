import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-dark p-3">
			<div className="text-center">
				<h1 className="text-warning m-0">STAR WARS BLOG</h1>
			</div>
			<div className="dropdown ms-auto">
				<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</a>
				<ul className="dropdown-menu">
					{store.favorites.length !== 0 ? store.favorites.map((favorite, index) => (
						<li key={index}>
							<a className="dropdown-item" href="#">
								{favorite} <i className="fa-solid fa-trash ms-3" onClick={() => actions.deleteFavorites(favorite)}></i>
							</a>
						</li>
					)) : <li><a className="dropdown-item" href="#">Empty</a></li>}
				</ul>
			</div>
		</nav>


	);
};
