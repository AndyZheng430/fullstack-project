import React from 'react';
import "./Form.css";

function Form() {
    const [firstNameError, setFirstNameErrorMessage] = React.useState("");
    const [lastNameError, setLastNameErrorMessage] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        
        var hasErrors = false;

        if (formJson["firstName"].length < 1) {
            setFirstNameErrorMessage("Please fill out this field.");
            hasErrors = true;
        }

        if (formJson["lastName"].length < 1) {
            setLastNameErrorMessage("Please fill out this field.");
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        console.log("Data has been validated.");
    }

    return (
        <form method="post" onSubmit={handleSubmit} noValidate>
            <div className="row">
                <label>
                    First Name: <input type="text" name="firstName" placeholder="First Name" />
                    {firstNameError && <div className="error"> {firstNameError} </div>}
                </label>
                <label>
                    Last Name: <input type="text" name="lastName" placeholder="Last Name" />
                    {lastNameError && <div className="error"> {lastNameError} </div>}
                </label>
            </div>
            <div className="row">
                <label>
                    Starting Location: <input type="text" name="start" placeholder="Starting Location..." />
                </label>
            </div>
            <div className="row">
                <label>
                    Destination: <input type="text" name="end" placeholder="Destination..." />
                </label>
            </div>
            <div className="row">
                <h3>Select your ride: </h3>                
                <label>
                    <input type="radio" name="rideOptions" value="1" />
                    <h4>Velociraptor</h4>
                    <p>For 1-2 people</p>
                </label>
                <label>
                    <input type="radio" name="rideOptions" value="2" />
                    <h4>Triceratops</h4>
                    <p>For 3-8 people</p>
                </label>
                <label>
                    <input type="radio" name="rideOptions" value="3" />
                    <h4>Brachiosaurus</h4>
                    <p>For 8-20 people</p>
                </label>
            </div>
            <label className="row">
                Would you like to add out signature dinosaur donuts?
                <select name="addDonuts">
                    <option value="">---</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label>
            <label className="row">
                Comments: <textarea name="comments" placeholder="Type Additional Comments or Request Here..."></textarea>
            </label>
            <button type="submit">Order</button>
        </form>
    );
}

export default Form;