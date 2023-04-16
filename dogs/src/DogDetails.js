import React from "react";
import { v4 as uuid } from "uuid";
import {useParams, NavLink, useHistory} from "react-router-dom";
import "./DogDetails.css"


/**
 * Renders details about a particular dog
 * 
 * Contains link back to the list of all dogs
 */

const DogDetails = ({dogs}) => {
    // initialize history
    const history = useHistory();

    // get the name from the URL
    const dogName = useParams().name;

    // find the corresponding dog in the dogs array within defaultProps, case insensitive
    const dog = dogs.find(dog => dog.name.toLowerCase() === dogName.toLowerCase());

    // check for dog to exist in list of dogs
    if(!dog){
        // if dog doesn't exist, stop the render and redirect to list of all dogs
        history.push('/dogs')
        return null;
    }

    return(
        <div className="DogDetails">
            {/* dog image */}
            <div className="DogDetails-image-container">
                <img src={dog.src} alt={`${dog.name}`}/>
                {/* dog information */}
            <div className="DogDetails-info">
                <h3>Name: {dog.name}</h3>
                <h5>Age: {dog.age}</h5>
                {/* map dog facts to li's */}
                <ul>
                    {dog.facts.map(fact => 
                        <li key={uuid()}>{fact}</li>
                    )}
                </ul>
            </div>
            </div>
            {/* nav link to return to list of dogs */}
            <div className="DogDetails-nav">
                <nav>
                    <NavLink exact to='/'>Go Back</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default DogDetails;