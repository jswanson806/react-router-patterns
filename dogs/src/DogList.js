import React from "react";
import { NavLink } from "react-router-dom";
import "./DogList.css"


/**
 * Renders list of all dogs
 * 
 * Displays an image and link to the dog details route
 */

const DogList = ({dogs}) => {
    

    return(
        <div className="DogList">
            <div className="DogList-dogs">
                <h1>Dogs</h1>
                <nav>
                    {/* map dog's image src to img and dog's name to NavLink */}
                    {dogs.map(dog => 
                        <div className="DogList-choices" key={dog.name}>
                            <img src={dog.src} alt={dog.name}></img>
                            <NavLink exact to={`/dogs/${dog.name}`} >
                                {dog.name}
                            </NavLink>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default DogList;