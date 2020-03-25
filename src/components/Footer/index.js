import React from 'react'
import SignOut from '../SignOut'

import './style.css'

const Footer = (props) => 
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SignOut />
                </div>
            </div>
        </div>
    </footer>

export default Footer