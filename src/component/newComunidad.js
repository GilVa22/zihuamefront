import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


export class newComunidad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direccion : "direccion",
            lat : "lat",
            longi : "longi",
            desc : "desc",
            id : 0,
            fotos : ["fotos", "foto"],
            prod : ["prod"],
            //this.nombre: "name",
            
        }
    }
    componentDidMount() {
        
        this.setState({
            direccion :this.props.comunidad.direccion,
            lat : this.props.comunidad.lat,
            longi : this.props.comunidad.longi,
            desc : this.props.comunidad.desc,
            id : this.props.comunidad.id,
            fotos : this.props.comunidad.fotos,
            prod : this.props.comunidad.prod,
            //nombre: this.props.comunidad.nombre,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const comunidad = {
            direccion : this.state.direccion,
            lat : this.state.lat,
            longi : this.state.longi,
            desc : this.state.desc,
            id : this.state.id,
            fotos : this.state.fotos,
            prod : this.state.prod,
            //nombre: this.state.nombre,
        }
        axios.post('', comunidad)
        .then(res => console.log(res.data));
    }
    clicked = () => {
        this.props.setForms(false);
    }
    render() {
        return (
            <div>
                <Button style={{float: "right"}} className="" onClick={this.clicked}>
                    X
                </Button>
                <Form>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="Cnombre">
                            <Form.Label>{this.state.id}</Form.Label>
                            <Form.Control type="email" placeholder={this.state.id} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{this.state.direccion}</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Form>
                 <Button
                  style={{ backgroundColor: "#efb810", color: "black", width: "100%",}}
                  type="submit"
                  className="mb-2"
                  onClick={this.handleSubmit}
                >
                  Guardar
                </Button>
            </div>
        )
    }
}

export default newComunidad
