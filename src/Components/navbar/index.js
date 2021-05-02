import React from "react";

import { Navbar, NavbarList, NavbarLink, StyledLink } from "./styled";

const NavBar = () => (
  <Navbar>
    <NavbarList>
      <NavbarLink>
        <StyledLink href="/">Uniswap LP Range Calculator</StyledLink>
      </NavbarLink>
    </NavbarList>
  </Navbar>
);

export default NavBar;
