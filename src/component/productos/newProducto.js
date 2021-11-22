import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class newProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            precio : 0,
            id : 0,
            enlaceCompra : "",
            fotos : [""],
            desc : "",
            autor : "",
            comunidad : "",
            //this.nombre: "name",  
            allComunidades: [],
        }
    }
    componentDidMount() {
        this.changeState();
        this.setState({
            comunidad: this.props.comunidades[0].id
        });
    }


    changeState = () =>{

        if(this.props.index<0){
            console.log("NEW");
            this.setState({
                allComunidades: this.props.comunidades,
            });
        }
        else{
            this.setState({
                nombre : this.props.producto[this.props.index].nombre,
                precio : this.props.producto[this.props.index].precio,
                enlaceCompra : this.props.producto[this.props.index].enlaceCompra,
                fotos : this.props.producto[this.props.index].fotos,
                id : this.props.producto[this.props.index].id,
                desc : this.props.producto[this.props.index].desc,
                autor: this.props.producto[this.props.index].autor,
                comunidad : this.props.producto[this.props.index].comunidad,

                allComunidades: this.props.comunidades,
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
            const producto = {
                nombre: this.state.nombre,
                precio : this.state.precio,
                enlaceCompra : this.state.enlaceCompra,
                fotos : this.state.fotos,
                desc : this.state.desc,
                autor : this.state.autor,
                comunidad : this.state.comunidad,
                //
            }
            axios.post('http://localhost:8080/api/producto/' , producto)
                .then(res => alert(res.data));
                
        }
        else if(this.state.id!==0){
                const producto = {
                    nombre: this.state.nombre,
                    precio : this.state.precio,
                    id : this.state.id,
                    enlaceCompra : this.state.enlaceCompra,
                    fotos : this.state.fotos,
                    desc : this.state.desc,
                    autor : this.state.autor,
                    comunidad : this.state.comunidad,
                }
                axios.put('http://localhost:8080/api/producto/'+this.state.id, producto)
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
                            <Form.Label>Nombre del Producto</Form.Label>
                            <Form.Control type="text" value={this.state.nombre} name="nombre" placeholder="Producto X" onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="precio">
                            <Form.Label>Precio del Producto</Form.Label>
                            <Form.Control  name="precio" type="number" placeholder="225" value={this.state.precio} onChange={(e) => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="enlaceCompra">
                            <Form.Label>Enlace de Compra</Form.Label>
                            <Form.Control type="text" value={this.state.enlaceCompra} name="enlaceCompra" placeholder="www.mercadolibre.com.mx/" onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="Autor">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control  name="autor" type="text" placeholder="Nombre completo del autor" value={this.state.autor} onChange={(e) => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="desc">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control  name="desc" type="text" placeholder="Información de la comunidad" value={this.state.desc} onChange={(e) => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="Comunidad">
                            <Form.Label>Comunidad</Form.Label>
                            <Form.Select   name="comunidad" type="text"  value={this.state.allComunidades[0]} onChange={(e) => this.handleChange(e)}>
                                {this.state.allComunidades.map((comunidad) => {
                                    return <option key={comunidad.id} value={comunidad.id}>{comunidad.nombre}</option>
                                })}
                            </Form.Select>
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

export default newProducto
