import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const PlanetInfo = () => {

    const { store } = useContext(Context);

    return (
        <div className="vh-100" style={{ backgroundColor: "black"}}>
        <div className="container border">
            <div className="row mb-3">
                <div className="col-12">
                    <h1 className="text-danger text-center">{store.learnMorePlanets.name}</h1>
                    <p className="text-white text-center">
                        La República Galáctica está
                        sumida en el caos. Los
                        impuestos de las rutas
                        comerciales a los sistemas
                        estelares exteriores están en
                        disputa.

                        Esperando resolver el asunto
                        con un bloqueo de poderosas
                        naves de guerra, la codiciosa
                        Federación de Comercio ha
                        detenido todos los envíos al
                        pequeño planeta de Naboo.
                    </p>
                </div>
            </div>
            <div className="border-top border-danger">
                <div className="row mt-3">

                    <div className="col-2 text-white">
                        <h6>Name</h6>
                        <p>{store.learnMorePlanets.name}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Diameter</h6>
                        <p>{store.learnMorePlanets.diameter}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Orbital Period</h6>
                        <p>{store.learnMorePlanets.orbital_period}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Gravity</h6>
                        <p>{store.learnMorePlanets.gravity}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Population</h6>
                        <p>{store.learnMorePlanets.population}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Climate</h6>
                        <p>{store.learnMorePlanets.climate}</p>
                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-3">
                <Link to={"/"}><button type="button" className="btn btn-primary">Back to Home</button></Link>
            </div>
        </div>
        </div>
    )
}

export default PlanetInfo;