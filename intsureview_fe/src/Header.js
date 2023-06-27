import logo from './logo.svg';
import './Header.css';

function Header() {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <h1>Dinosaurs & Donuts</h1>
        </header>
    );
}

export default Header;