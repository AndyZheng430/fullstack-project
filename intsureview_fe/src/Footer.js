import './Footer.css'

function Footer() {
    
    return (
        <footer>
            <div className="row">
                <div className="column">
                    <h2>Fake Company Name</h2>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="column">
                    <div className="column">
                        <h3>Product</h3>
                        <a href="#">Ride</a>
                        <a href="#">Menu</a>
                        <a href="#">Takeout</a>
                        <a href="#">Delivery</a>
                    </div>
                    <div className="column">
                        <h3>Resources</h3>
                        <a href="#">Blog</a>
                        <a href="#">Press</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div className="copyright row">
                Not a Real Copyright ©2023 Fake Company Name.
            </div>
        </footer>
    );
}

export default Footer;