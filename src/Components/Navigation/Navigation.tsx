import React, { ReactNode } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

// NOTE: Set sizeAdjust event type.
interface props {
  randomize(e: React.MouseEvent<HTMLElement, MouseEvent> | undefined): void;
  sizeAdjust(e: string | null): void;
  sorting(e: React.MouseEvent<HTMLElement, MouseEvent> | undefined): void;
}
const navigation: React.FC<props> = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Sort Viz</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Array size" id="basic-nav-dropdown">
            <NavDropdown.Item
              eventKey="10"
              onSelect={(e) => props.sizeAdjust(e)}
            >
              10
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="15"
              onSelect={(e) => props.sizeAdjust(e)}
            >
              15
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="20"
              onSelect={(e) => props.sizeAdjust(e)}
            >
              20
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="25"
              onSelect={(e) => props.sizeAdjust(e)}
            >
              25
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
          <Button variant="info" onClick={(e) => props.randomize(e)}>
            Randomize
          </Button>
        </Nav>
        <Button variant="success" onClick={(e) => props.sorting(e)}>
          SORT!
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default React.memo(navigation);
