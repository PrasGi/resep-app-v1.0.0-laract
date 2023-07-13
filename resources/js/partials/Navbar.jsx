//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <b>Resep</b>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ml-end">
                        <Link className="nav-link" href="./resep">
                            Create
                        </Link>
                        <Link className="nav-link" href="./logout">
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
