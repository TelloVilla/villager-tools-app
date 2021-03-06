import React from "react";
import {Link} from "gatsby";

export default function Layout({children}){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Villager Tools</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/jukebox/">Slider Jukebox</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/catch/">What to Catch</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
        </div>
    );
}