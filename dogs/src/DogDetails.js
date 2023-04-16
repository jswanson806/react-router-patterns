import React from "react";
import {useParams, NavLink} from "react-router-dom";
import "./DogDetails.css"

const DogDetails = ({dogs}) => {

    // get the name from the URL
    const dogName = useParams().name;
    // find the corresponding dog in the dogs array within defaultProps, case insensitive
    const dog = dogs.find(dog => dog.name.toLowerCase() === dogName.toLowerCase());

    return(
        <div className="DogDetails">
            <div className="DogDetails-image-container">
                <img src={dog.src} alt={`${dog.name}`}></img>
            
            <div className="DogDetails-info">
                <h3>Name: {dog.name}</h3>
                <h5>Age: {dog.age}</h5>
                <ul>
                    {dog.facts.map(fact => 
                        <li>{fact}</li>
                    )}
                </ul>
            </div>
            </div>
            <div className="DogDetails-nav">
                <nav>
                    <NavLink exact to='/'>Go Back</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default DogDetails;