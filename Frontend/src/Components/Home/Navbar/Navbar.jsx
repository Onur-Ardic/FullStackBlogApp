import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <a href="/">Blog App</a>
                    </div>
                    <div className="navbar-links">
                        <NavbarLinks />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
