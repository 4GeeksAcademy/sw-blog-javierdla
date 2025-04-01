import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const PlanetCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [planet, setPlanet] = useState({});

    const getSinglePlanet = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);

            const data = await response.json();

            setPlanet(data.result.properties);
        } catch (error) {
            console.error("Error fetching planet data:", error);
        }
    };

    useEffect(() => {

        getSinglePlanet();

    }, []);

    if (!planet) {
        return <p>Loading...</p>;
    }

    return (
        <div className="card m-3" style={{ backgroundColor: "yellow", width: "20rem" }}>
            <div className="card-body">
                <h5 className="card-title">{planet.name || "Loading..."}</h5>
                <p className="card-text">Residents: {planet.residents || "Unknown"}</p>
                <p className="card-text">Population: {planet.population || "Unknown"}</p>
                <p className="card-text">Gravity: {planet.gravity || "Unknown"}</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/PlanetInfo"}>
                        <button type="button" onClick={() => actions.putLearnMorePlanets(planet)} className="btn btn-primary"> Learn More!</button>
                    </Link>
                    <button type="button" className="btn btn-warning" onClick={() => actions.addFavorites(planet.name)}><span><i className="fa-solid fa-heart"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanetCard;
