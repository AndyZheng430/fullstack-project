import React from 'react';
import logo from './logo.svg';
import "./Form.css";

function Form() {
    const [nameError, setNameErrorMessage] = React.useState("");
    const [rideChoiceError, setRideChoiceErrorMessage] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        var hasError = false;

        if (formJson["FullName"].length < 1) {
            setNameErrorMessage("Please complete this required field.");
            hasError = true;
        }

        if (!("RideChoice" in formJson) || formJson["RideChoice"].length < 1) {
            setRideChoiceErrorMessage("Please select an option for the required field.");
            hasError = true;
        }

        if (hasError) {
            return;
        }

        console.log("Data has been validated.");
    }

    return (
        <form id="order-form" method="post" onSubmit={handleSubmit} noValidate>
            <div className="form-row-1">
                <label className="form-label">Name*</label>
                <div className="input">
                    <input type="text" className="text-input" name="FullName" />
                </div>
                {nameError && <div className="error"> {nameError} </div>}
            </div>
            <div className="form-row-1">
                <div className="form-column-2 left-column">
                    <label className="form-label">Starting Point</label>
                    <div className="input">
                        <input type="text" className="text-input" name="Start" />
                    </div>
                </div>
                <div className="form-column-2 right-column">
                    <label className="form-label">Destination</label>
                    <div className="input">
                        <input type="text" className="text-input" name="End" />
                    </div>
                </div>
            </div>
            <div className="form-row-1">
                <label className="form-label">Select your ride*</label>
                {rideChoiceError && <div className="error"> {rideChoiceError} </div>}
                <RideRadio value="1" image={logo} name="Velociraptor" detail="Fits 1-2 people" cost="1,000" />
                <RideRadio value="2" image={logo} name="Triceratops" detail="Fits 3-8 people" cost="10,000"/>
                <RideRadio value="3" image={logo} name="Brachiosaurus" detail="Fits 8-20 people" cost="100,000"/>
            </div>
            <div className="form-row-1">
                <label className="form-label">Would you like to add our signature dinosaur donuts?</label>
                <select name="AddDonuts">
                    <option value="">---</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="form-row-1">
                <label className="form-label">Comments</label>
                <div className="input">
                    <textarea className="text-input textarea" name="Comments" placeholder="(Optional)"></textarea>
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
            <input type="radio" id={id} name="RideChoice" value={value} />
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