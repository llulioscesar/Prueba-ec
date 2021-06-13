import React, {useState} from 'react';
import {Col, Container, Row, Form, Button} from 'react-bootstrap';

export const RouterForm = (props) => {
    const {save} = props;

    const [id, setId] = useState('');
    const [idpadre, setIdPadre] = useState('');
    const [nombre, setNombre] = useState('')

    const onSave = () => {
        save({
            id,
            padreid: idpadre === '' ? null : idpadre,
            nombre
        })
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control placeholder="Ingrese el ID" value={id} onChange={e => setId(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Padre ID</Form.Label>
                        <Form.Control placeholder="Ingrese el Padre ID" value={idpadre}
                                      onChange={e => setIdPadre(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Ingrese el nombre" value={nombre}
                                      onChange={e => setNombre(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Button onClick={() => onSave()} disabled={id === '' || nombre === ''}
                            style={{marginRight: 8}}>Guardar</Button>
                    <Button variant="secondary">Cancelar</Button>
                </Col>
            </Row>
        </Container>
    )
}