import axios from 'axios';
import React from 'react';
import logo from './logo.svg';
import "./Form.css";

function Form() {
    const [nameError, setNameErrorMessage] = React.useState("");
    const [rideTypeError, setRideTypeErrorMessage] = React.useState("");
    const [httpError, setHttpErrorMessage] = React.useState("");
    const [httpSuccess, setHttpSuccessMessage] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());

        var hasError = false;

        if (formJson["name"].length < 1) {
            setNameErrorMessage("Please complete this required field.");
            hasError = true;
        } else {
            setNameErrorMessage("");
        }

        if (!("ride_type" in formJson) || formJson["ride_type"].length < 1) {
            setRideTypeErrorMessage("Please select an option for the required field.");
            hasError = true;
        } else {
            setRideTypeErrorMessage("");
            formJson["ride_type"] = parseInt(formJson["ride_type"]);
        }

        if (formJson["add_donuts"] === "yes") {
            formJson["add_donuts"] = true;
        } else {
            formJson["add_donuts"] = false;
        }

        if (hasError) {
            return;
        }

        axios.post("http://localhost:8000/order", formJson)
            .then(res => 
                {
                    console.log(res)
                    setHttpSuccessMessage(res.data);
                    setHttpErrorMessage("");
                })
            .catch(err => 
                {
                    console.log(err)
                    setHttpErrorMessage(err.message);
                    setHttpSuccessMessage("");
                });
    }

    return (
        <form id="order-form" method="post" onSubmit={handleSubmit} noValidate>
            {httpSuccess &&  <div className="success"> {httpSuccess} </div>}
            {httpError && <div className="error"> {httpError} </div>}
            <h1 className="form-title">Create Your Ride</h1>
            <div className="form-row-1">
                <label className="form-label">Name*</label>
                <div className="input">
                    <input type="text" className="text-input" name="name" />
                </div>
                {nameError && <div className="error"> {nameError} </div>}
            </div>
            <div className="form-row-1">
                <div className="form-column-2 left-column">
                    <label className="form-label">Starting Point</label>
                    <div className="input">
                        <input type="text" className="text-input" name="start" />
                    </div>
                </div>
                <div className="form-column-2 right-column">
                    <label className="form-label">Destination</label>
                    <div className="input">
                        <input type="text" className="text-input" name="end" />
                    </div>
                </div>
            </div>
            <div className="form-row-1">
                <label className="form-label">Select your ride*</label>
                {rideTypeError && <div className="error"> {rideTypeError} </div>}
                <RideRadio value="1" image={logo} name="Velociraptor" detail="Fits 1-2 people" cost="1,000" />
                <RideRadio value="2" image={logo} name="Triceratops" detail="Fits 3-8 people" cost="10,000"/>
                <RideRadio value="3" image={logo} name="Brachiosaurus" detail="Fits 8-20 people" cost="100,000"/>
            </div>
            <div className="form-row-1">
                <label className="form-label">Would you like to add our signature dinosaur donuts?</label>
                <select name="add_donuts">
                    <option value="">---</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="form-row-1">
                <label className="form-label">Comments</label>
                <div className="input">
                    <textarea className="text-input textarea" name="comments" placeholder="(Optional)"></textarea>
                </div>
            </div>
            <button type="submit" className="submit">Submit</button>
        </form>
    );
}

function RideRadio({value, image, name, detail, cost}) {
    const id = "radio-"+name;

    return (
        <div className="ride-option"> 
            <input type="radio" id={id} name="ride_type" value={value} />
            <label className="ride-label" htmlFor={id}>
                <img src={image} className="ride-image" alt={name} />
                <div className="ride-caption">
                    <div className="form-column-2">
                        <h4 className="ride-name">{name}</h4>
                        <p className="ride-detail">{detail}</p>
                    </div>
                    <h4 className="ride-cost">{cost} Bell</h4>
                </div>
            </label>
        </div>
    );
}

export default Form;