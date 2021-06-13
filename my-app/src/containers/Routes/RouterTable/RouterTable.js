import React, {Fragment} from "react";
import {Table, Container, Row, Col, Button} from 'react-bootstrap';

export const RouterTable = (props) => {
    const {data, erase} = props;
    return (
        <Fragment>
            <hr/>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <td>ID</td>
                                <td>ID Padre</td>
                                <td>Nombre</td>
                                <td>Eliminar</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.map((route, i) => {
                                    const {id, padreid, nombre} = route;
                                    return (
                                        <tr key={i}>
                                            <td>{id}</td>
                                            <td>{padreid ? padreid : 'NULL'}</td>
                                            <td>{nombre}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => erase(id)}>Eliminar</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>

        </Fragment>
    )
}