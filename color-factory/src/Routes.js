import React, {useState} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

/**
 * Handles all of the routes
 * 
 * Sets initial state of colors and has function for adding new colors
 */

const Routes = () => {
    // initial state of 3 colors with color name as key and hex code as value
    const INITIAL_STATE = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    }
    // initialize useState with initial state
    const [colors, setColorList] = useState(INITIAL_STATE);

    // function to add new color object to state along with existing colors
    const addColor = (newColor) => {
      setColorList(colors => ({...colors, ...newColor}))
    }
  
    
    return(
        // **** routes ****
        <BrowserRouter>
        <Switch>
            {/* renders a list of all colors & a btn to access new color form*/}
          <Route exact path="/colors">
            <ColorList colors={colors}/>
          </Route>
          {/* renders the new color form passing in the addColor function */}
          <Route exact path="/colors/new">
            <NewColorForm addColor={addColor}/>
          </Route>
          {/* renders a chosen color */}
          <Route path="/colors/:color">
            <Color colors={colors}/>
          </Route>
          {/* redirects to list of colors if no matching path */}
          <Redirect to='/colors' />
        </Switch>
      </BrowserRouter>
    )
}



export default Routes;