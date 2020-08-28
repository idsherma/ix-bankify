import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


function Navbar() {
    return (
        <NavigationBar classname="navbar-fixed">
            <nav className="z-depth-0">
                <div className="nav-wrapper white">
                    <Link className="linkComp col s5 brand-logo center black-text" to="/">
                    <i className="material-icons">account_balance</i>
                        Bankify
                    </Link>
                </div>
            </nav>
        </NavigationBar>
    )
}

export default Navbar;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */

const NavigationBar = styled.div`
    .linkComp {
        fontFamily: monospace;
    }
`; 