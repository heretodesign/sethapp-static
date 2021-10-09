import React from 'react'
import { NavLink } from "react-router-dom";

export const AdminNav = () => {
    return (
        <>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large">

                    <nav className="navbar is-fixed-top has-background-black" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            {/* <a className="navbar-item" href="https://bulma.io">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            </a> */}

                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                            </div>

                            <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>


            {/* <header className="hero">
                <div className="hero-head">
                    <nav className="navbar is-fixed-top  has-background-info has-shadow" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item is--brand">
                        <img
                            className="navbar-brand-logo"
                            src="<%= data.config.publicPath %>/img/logo-64.png"
                            alt="Brand logo"
                        />
                                </a>

                        <button className="button navbar-burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                        </button>
                    </div>

                    <div className="navbar-menu navbar-end" id="navMenu">
                        <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            <figure className="image is-32x32" id="margin-right: 0.5em">
                            <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32" />
                            </figure>
                            mazipan
                        </a>

                        <div className="navbar-dropdown is-right">
                            <a className="navbar-item" href="https://mazipan.space/" target="_blank" rel="noopener noreferrer">
                            <span className="icon is-small">
                                <i className="fa fa-user-o"></i>
                            </span>
                            &nbsp; Profile
                            </a>
                            <hr  />
                            <a className="navbar-item">
                            <span className="icon is-small">
                                <i className="fa fa-power-off"></i>
                            </span>
                            &nbsp; Logout
                            </a>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </header> */}
        </>
    )
}
