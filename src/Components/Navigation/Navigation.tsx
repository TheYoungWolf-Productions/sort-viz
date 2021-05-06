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

interface props {
  randomize(e: React.MouseEvent<HTMLElement, MouseEvent> | undefined): void;
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
          <NavDropdown title="Sort-Algorithm" id="basic-nav-dropdown">
            <NavDropdown.Item>Bubble Sort</NavDropdown.Item>
            <NavDropdown.Item>Merge Sort</NavDropdown.Item>
            <NavDropdown.Item>Quick Sort</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
          <Button variant="info" onClick={(e) => props.randomize(e)}>
            Randomize
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default navigation;
