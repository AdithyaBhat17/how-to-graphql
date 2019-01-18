import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">Rick and Morty</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Characters <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/episodes">Episodes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}