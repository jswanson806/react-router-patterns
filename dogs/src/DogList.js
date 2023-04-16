import React from "react";
import { NavLink } from "react-router-dom";
import "./DogList.css"

const DogList = ({dogs}) => {


    return(
        <div className="DogList">
            <div className="DogList-dogs">
                <h1>Dogs</h1>
                <nav>
                    {dogs.map(dog => 
                        <div className="DogList-choices">
                            <img src={dog.src} alt={dog.name}></img>
                            <NavLink exact to={`/dogs/${dog.name}`} key={dog.name}>
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