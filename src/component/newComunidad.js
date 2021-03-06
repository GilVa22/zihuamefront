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
            direccion : "",
            lat : 0,
            longi : 0,
            desc : "",
            id : 0,
            fotos : "",
            nombre : "",
            prod : [""],
            //this.nombre: "name",  
            allProducts: [],
        }
    }
    componentDidMount() {
        this.changeState();
    }


    changeState = () =>{

        if(this.props.index<0){
            console.log("NEW");
        }
        else{
            this.setState({
                direccion : this.props.comunidad[this.props.index].direccion,
                lat : this.props.comunidad[this.props.index].lat,
                longi : this.props.comunidad[this.props.index].longi,
                desc : this.props.comunidad[this.props.index].desc,
                id : this.props.comunidad[this.props.index].id,
                fotos : this.props.comunidad[this.props.index].fotos,
                nombre: this.props.comunidad[this.props.index].nombre,
                prod : this.props.comunidad[this.props.index].prod,
                allProducts: this.props.productos,
                //
            });
        }

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.id===0){
            const comunidad = {
                direccion : this.state.direccion,
                lat : this.state.lat,
                longi : this.state.longi,
                desc : this.state.desc,
                fotos : this.state.fotos, 
                nombre: this.state.nombre, 
                //
            }
            axios.post('http://localhost:8080/api/comunidad/' , comunidad)
                .then(res => alert(res.data));
                
        }
        else if(this.state.id!==0){
                const comunidad = {
                    direccion : this.state.direccion,
                    lat : this.state.lat,
                    longi : this.state.longi,
                    desc : this.state.desc,
                    id : this.state.id,
                    fotos : this.state.fotos, 
                    nombre: this.state.nombre, 
                    prod : this.state.prod, //Falta
                    //
                }
                axios.put('http://localhost:8080/api/comunidad/'+this.state.id, comunidad)
                    .then(res => alert(res.data));
                    
        }
        else{
            console.log(this.state.id);
        }
        
        window.location.reload(false);

    }
    clicked = () => {
        this.props.setForms(false);
    }
    render() {
        
        return (
            <div>
                <Button style={{float: "right"}} className="btn-danger" onClick={this.clicked}>
                    X
                </Button>
                <Form>
                    <Row>
                        <p>ID de la Comunidad {this.state.id}</p>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre de la comunidad</Form.Label>
                            <Form.Control type="text" value={this.state.nombre} name="nombre" placeholder="Comunidad X" onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="dir">
                            <Form.Label>Direcci??n</Form.Label>
                            <Form.Control  name="direccion" type="text" placeholder="Calle Colinas #3355 Col. Numeros" value={this.state.direccion} onChange={(e) => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="lat">
                            <Form.Label>Latitud</Form.Label>
                            <Form.Control type="number" value={this.state.lat} name="lat" placeholder="26.742917" onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="long">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control  name="longi" type="number" placeholder="-101.742917" value={this.state.longi} onChange={(e) => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="desc">
                            <Form.Label>Descripci??n</Form.Label>
                            <Form.Control  name="desc" type="text" placeholder="Informaci??n de la comunidad" value={this.state.desc} onChange={(e) => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="desc">
                            <Form.Label>Foto de la comunidad</Form.Label>
                            <Form.Control  name="fotos" type="text" placeholder="Imagen de la comunidad" value={this.state.fotos} onChange={(e) => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row> 
                </Form>
                 <Button
                  style={{color: "white", width: "20%", float: "right"}}
                  type="submit"
                  className="mb-2 btn-primary"
                  onClick={this.handleSubmit}
                >
                  Guardar
                </Button>
            </div>
        )
    }
}

export default newComunidad
