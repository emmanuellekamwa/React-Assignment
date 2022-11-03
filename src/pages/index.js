import React from 'react';
import { NavLink, NavMenu } from './NavbarElements';

const Navbar =() =>{
    return (
        <>
            <nav>
                <NavMenu>
                    <NavLink to="/women" activeStyle>
                        WOMEN
                    </NavLink>
                    <NavLink to="/men" activeStyle>
                        MEN
                    </NavLink>
                    <NavLink to="/kids" activeStyle>
                        KIDS
                    </NavLink>
                </NavMenu>
            </nav>
        </>
    );
}

export default Navbar;