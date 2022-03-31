import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function NavbarModule() {
  return (
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">This is demo</NavbarBrand>
      </div>
    </Navbar>
  );
}

export default NavbarModule;