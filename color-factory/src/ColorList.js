import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./ColorList.css";


const ColorList = ({colors}) => {


    return (
        <div className="ColorFactory">
            <div className="ColorFactory-header">
                {/* title */}
                <h1>Welcome to the color factory</h1>
                {/* link to new color form */}
                <nav>
                    <NavLink exact to="/colors/new">
                        Add a color
                    </NavLink>
                </nav>
            </div>
            {/* nav links to each available color */}
            <div className="ColorFactory-color-list">
                <nav>
                    {/* maps keys from colors object to NavLinks */}
                    {Object.keys(colors).map(color => 
                    <div key={color}>
                        <NavLink exact to={`/colors/${color}`} key={`${colors[color]}`}>
                            {color}
                        </NavLink>
                    </div>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default ColorList;