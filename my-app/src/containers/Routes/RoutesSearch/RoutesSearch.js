import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export const RoutesSearch = (props) => {
    const {term, loading, search, padres, setFindParents} = props;

    const [termino, setTermino] = useState('');

    useEffect(() => {
        setTermino(term);
    }, [term]);

    const onChange = (e) => {
        setTermino(e.target.value);
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>ID de la ruta</Form.Label>
                        <Form.Control placeholder="Buscar" value={termino} onChange={onChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form.Check
                        type="checkbox"
                        label="Consultar rutas padres"
                        checked={padres}
                        onChange={(e) => setFindParents(e.target.checked)}
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Button onClick={() => search(termino)} disabled={loading}>Buscar</Button>
            </Row>
        </Container>
    )
}