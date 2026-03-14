import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/Navbar.css";
import logoniko from "../assets/logoniko.png";

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <Link to="/" className="navbar-brand">
                <div className="navbar-logo-wrap">
                    <img src={logoniko} alt="BG Movie Watch" className="navbar-logo-img" />
                </div>
            </Link>
            <div className="navbar-links">
                <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
                <NavLink to="/favorites" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Favorites</NavLink>
                <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
            </div>
        </nav>
    );
}

export default NavBar