import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import PeopleCard from "../component/PeopleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        
            <main style={{ backgroundColor: "black"}}>
                <h1 className="ms-3 mb-3 text-danger">CHARACTERS</h1>
                <section className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {store.people.map((personaje, index) => (
                        <div className="col" key={personaje.uid || index}>
                            <PeopleCard uid={personaje.uid} index={index} />
                        </div>
                    ))}
                </section>

                <h1 className="m-3 text-danger">PLANETS</h1>
                <section className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3">
                    {store.planets.map((planeta, index) => (
                        <div className="col" key={planeta.uid || index}>
                            <PlanetCard uid={planeta.uid} index={index} />
                        </div>
                    ))}
                </section>

                <h1 className="m-3 text-danger">VEHICLES</h1>
                <section className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3">
                    {store.vehicles.map((vehiculo, index) => (
                        <div className="col" key={vehiculo.uid || index}>
                            <VehicleCard uid={vehiculo.uid} index={index} />
                        </div>
                    ))}
                </section>
            </main>


        
    );
};
