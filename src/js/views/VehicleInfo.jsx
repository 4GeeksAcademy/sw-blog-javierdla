import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const VehicleInfo = () => {
    const { store } = useContext(Context);

    return (
        <div className="vh-100" style={{ backgroundColor: "black"}}>
        <div className="container border">
            <div className="row mb-3">
                <div className="col-12">
                    <h1 className="text-danger text-center">{store.learnMoreVehicles.name}</h1>
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
                        <h6>Model</h6>
                        <p>{store.learnMoreVehicles.model}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Vehicle Class</h6>
                        <p>{store.learnMoreVehicles.vehicle_class}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Cost</h6>
                        <p>{store.learnMoreVehicles.cost_in_credits}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Crew Capacity</h6>
                        <p>{store.learnMoreVehicles.crew}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Passengers Capacity</h6>
                        <p>{store.learnMoreVehicles.passengers}</p>
                    </div>

                    <div className="col-2 text-white">
                        <h6>Cargo Capacity</h6>
                        <p>{store.learnMoreVehicles.cargo_capacity}</p>
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

export default VehicleInfo;