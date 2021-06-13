import React, {Fragment} from "react";
import {Switch, Route} from 'react-router-dom';
import {Container, Nav, Navbar} from "react-bootstrap";
import HomePage from "./pages/HomePage";
import RouteNewPage from "./pages/RouteNewPage";
import RoutesSearchPage from "./pages/RoutesSearchPage";

function App() {
    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/crear">Crear</Nav.Link>
                            <Nav.Link href="/consultar">Consultar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/>
            <Switch>
                <Route path="/consultar" exact>
                    <RoutesSearchPage/>
                </Route>
                <Route path="/crear" exact>
                    <RouteNewPage/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </Fragment>

    );
}

export default App;
