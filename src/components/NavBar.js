const NavBar = () => {
    return (
        <nav className="NavContainer">
            <h2>Springfield Olympiads</h2>
            <ul>
                <li>Register</li>
                <li>Olympiads</li> {/* needs a dropdown on the right */}
                <li>About Us</li>
                <li>FAQ's</li>
                <li>Contact Us</li>
                <li>Institute Log In</li> {/* needs a solid border*/}
            </ul>
        </nav>
    );
}

export default NavBar;