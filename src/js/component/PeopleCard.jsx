import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const PeopleCard = ({ uid }) => {

    const { actions } = useContext(Context);
    const [person, setPerson] = useState({});

    if (!person) {
        return <p>Loading...</p>;
    }

    const getSinglePeople = async () => {

        try {

            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);

            const data = await response.json();
            
            setPerson(data.result.properties); 
            
        } catch (error) {
            console.error("Error fetching people data:", error);
        }
    
}

    useEffect(() => {

        getSinglePeople();

    }, [])

    return (
        <div className="card m-3" style={{ backgroundColor: "yellow" , width: "20rem" }}>
            <div className="card-body">
                <h5 className="card-title">{person.name || "Loading..."}</h5>
                <p className="card-text">Height: {person.height || "Unknown"}</p>
                <p className="card-text">Mass: {person.mass || "Unknown"}</p>
                <p className="card-text">Birth Year: {person.birth_year || "Unknown"}</p>
                <div className="d-flex justify-content-between">
                <Link to={"/PeopleInfo"}><button type="button" onClick={() => actions.putLearnMorePeople(person)} className="btn btn-primary">Learn More!</button></Link>
                    <button type="button" className="btn btn-warning" onClick={() => actions.addFavorites(person.name)}><span><i className="fa-solid fa-heart"></i></span></button>
                </div>
            </div>
        </div>
    )
}

export default PeopleCard;