import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-1">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <HashLink
                            className="navbar-brand"
                            to="/home#home"><span
                                style={{
                                    fontWeight: 'bolder',
                                    fontSize: '200%',
                                    color: '#F43F12'
                                }}>Tution</span>
                            <span style={{
                                fontWeight: 'bolder',
                                fontSize: '200%',
                                color: '#29E46D'
                            }}>Sheba</span>
                        </HashLink>
                        <HashLink
                            className="navbar-brand"
                            to="/home#home"
                            style={{ fontSize: '200%', color: '#F43F12' }}>
                            <i class="fas fa-book-reader"></i>
                        </HashLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="/home#about">About</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="/home#skills">Skills</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="/home#projects">Projects</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="/home#blog">Blog</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="/home#contact">Contact</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;