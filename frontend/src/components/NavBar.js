import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
  
function Navbar() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Despre
          </NavLink>
          <NavLink to="/programare" activeStyle>
            Programeaza-te
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contacteaza-ne
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;