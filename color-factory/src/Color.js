import React from "react";
import {useParams, useHistory} from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Color.css";

/**
 * Renders a chosen color page with title and color displayed
 * 
 * Provides back button to return to list of all colors
 */

const Color = ({colors}) => {
    // initialize history
    const history = useHistory();

    // initialize colorName with color param in URL
    const colorName = useParams().color;

    // initialize hex with the value of colorName from the colors object
    const hex = colors[colorName];

    // check if hex is not in the list of colors
    if (!hex) {
        // redirect to list of all colors if hex is not found
        history.push("/colors")    
    }

    return (
        <div className="Color" style={{backgroundColor: hex}}>
            <div className="Color-content" >
                {/* title is name of the color */}
                <h1>{colorName}</h1>
                {/* nav to go back to list of all colors */}
                <div className="Color-nav-container">
                    <nav className="Color-nav">
                        <NavLink exact to="/colors">
                            Go Back
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Color;