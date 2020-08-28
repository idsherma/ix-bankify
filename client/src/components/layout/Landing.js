import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Landing() {
    return (
        <LandingContainer className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>Welcome to <b>Bankify!</b></h4>
                    <p className="flow-text grey-text text-darken-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="col s6">
                    <Link to="/register" className="register btn btn-large waves-effect waves-light hoverable green accent-3">Register</Link>
                </div>
                <div className="col s6">
                    <Link to="/login" className="login btn btn-large waves-effect waves-light hoverable white black-text accent-3">Login</Link>
                </div>
                </div>
            </div>
        </LandingContainer>
    )
}

export default Landing;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */

const LandingContainer = styled.div`
    height: 75vh;

    h4 {
        fontFamily: monospace;
    }

    .register {
        width: 140px;
        borderRadius: 3px;
        letterSpacing: 1.5px;
    }

    .login {
        width: 150px;
        borderRadius: 3px;
        letterSpacing: 1.5px;
    }
`; 
