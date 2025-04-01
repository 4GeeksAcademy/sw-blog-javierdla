import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const VehicleCard = ({ uid }) => {
    const { store, actions } = useContext(Context);
    const [vehicle, setVehicle] = useState({});

const getSingleVehicle = async () => {

        try {

            const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);

            const data = await response.json();

            setVehicle(data.result.properties); 
            
        } catch (error) {
            console.error("Error fetching vehicle data:", error);
        }
    
}

    useEffect(() => {

        getSingleVehicle();

    }, [])

    if (!vehicle) {
        return <p>Loading...</p>;
    }

    return (
        <div className="card m-3" style={{ backgroundColor: "yellow" , width: "20rem" }}>
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">Model: {vehicle.model || "Unknown"}</p>
                <p className="card-text">Class: {vehicle.vehicle_class || "Unknown"}</p>
                <p className="card-text">Passengers: {vehicle.passengers || "Unknown"}</p>
                <div className="d-flex justify-content-between">
                <Link to={"/VehicleInfo"}><button onClick={() => actions.putLearnMoreVehicles(vehicle)} type="button" className="btn btn-primary" >Learn More!</button></Link>
                    <button type="button" className="btn btn-warning" onClick={() => actions.addFavorites(vehicle.name)}><span><i className="fa-solid fa-heart"></i></span></button>
                </div>
            </div>
        </div>
    )
}

export default VehicleCard;