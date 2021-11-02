import '../css/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-container">
            <h2>Springfield Olympiads</h2>
            <ul>
                <li>Register</li>
                <li>Olympiads</li> {/* needs a dropdown on the right */}
                <li>About Us</li>
                <li>FAQ's</li>
                <li>Contact Us</li>
                <li className="nav-login">Institute Log In</li> {/* needs a solid border*/}
            </ul>
            </div>
        </nav>
    );
}

export default NavBar;