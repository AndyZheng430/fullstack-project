function Form() {

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                First Name: <input type="text" name="firstName" placeholder="First Name" required />
            </label>
            <label>
                Last Name: <input type="text" name="lastName" placeholder="Last Name" required />
            </label>
            <label>
                Starting Location: <input type="text" name="start" placeholder="Starting Location..." required />
            </label>
            <label>
                Destination: <input type="text" name="end" placeholder="Destination..." required />
            </label>
            <br/>
            <h3>Select your ride: </h3>                
            <label>
                <input type="radio" name="rideOptions" value="1" required />
                <h4>Velociraptor</h4>
                <p>For 1-2 people</p>
            </label>
            <label>
                <input type="radio" name="rideOptions" value="2" required />
                <h4>Triceratops</h4>
                <p>For 3-8 people</p>
            </label>
            <label>
                <input type="radio" name="rideOptions" value="3" required />
                <h5>Brachiosaurus</h5>
                <p>For 8-20 people</p>
            </label>
            <br/>
            <label>
                Would you like to add out signature dinosaur donuts?
                <select name="addDonuts">
                    <option value="">---</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </label>
            <label>
                Comments: <textarea name="comments" placeholder="Type Additional Comments or Request Here..."></textarea>
            </label>
            <button type="submit">Order</button>
        </form>
    );
}

export default Form;