import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./NewColorForm.css"

const NewColorForm = ({addColor}) => {
    // set initial state = name is empty string, hex is white
    const INITIAL_STATE = {
        name: "",
        hex: "#ffffff"
    }
    // initialize state with initial state
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    // initialize history
    const history = useHistory();

    // handles changing the input value
    const handleChange = (e) => {
        // deconstructs name and value from target input
        const { name, value } = e.target;
        // overwrites the formData with the new input
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        // prevent page refresh upon form submission
        e.preventDefault();
        // call addColor and pass object with the color name as key and hex as value
        addColor({[formData.name]: formData.hex});
        // reset the form to initial state
        setFormData(INITIAL_STATE);
        // redirect user to list of colors after submitting the form
        history.push('/colors')
    }

    return(
        <div className="NewColorForm">
            <div className="NewColorForm-form">
                {/* call handleSubmit upon submission */}
                <form onSubmit={handleSubmit}>
                    {/* input for name of color */}
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        placeholder="Color Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {/* input for hex value is a color picker */}
                    <label htmlFor="hex">Color Value</label>
                    <input
                        id="hex"
                        type="color"
                        name="hex"
                        value={formData.hex}
                        onChange={handleChange}
                    />
                    {/* button to submit the form */}
                    <div className="NewColorForm-button">
                        <button type="submit">Add Color</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default NewColorForm;