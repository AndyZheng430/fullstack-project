import logo from './logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <h2 className="header-title">Dinosaurs & Donuts</h2>
        </header>
    );
}

export default Header;