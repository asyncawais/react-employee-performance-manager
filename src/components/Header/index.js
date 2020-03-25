import React from 'react'
import { NavLink } from "react-router-dom";

import './style.css'

const Header = (props) => 
    <header className="header">
        <div className="header__mask"></div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header__logo float-left">
                        <NavLink to="/"><img alt="loop" src="/logo.svg" /></NavLink>
                    </div>
                </div>
                <div className="col-6">
                <div className="navbar navbar-expand-lg navbar-dark float-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                    <ul className="main-navigation  d-none d-lg-block">
                        <li className="main-navigation__item"><NavLink to="/objectives" activeClassName="active" className="main-navigation__link">{"Objectives"}</NavLink></li>
                        <li className="main-navigation__item"><NavLink to="/feedback" activeClassName="active" className="main-navigation__link">{"Feedback"}</NavLink></li>
                        <li className="main-navigation__item"><NavLink to="/my-team" activeClassName="active" className="main-navigation__link">{"My Team."}</NavLink></li>
                    </ul>
                    <div className="avatar">
                    </div>
                </div>
            </div>
        </div>
    </header>

export default Header