import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
//import NewProducto from "../component/productos/newProductos";

export class productoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        //this.setForm = this.props.setForm;
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        //this.props.setForms(this.props.comunidad.id);    
    }
    click = (e) => {
        e.preventDefault();
        this.props.setForms(true, this.props.producto.id);
    }
    Cdelete = (e) => {
        e.preventDefault();
        //Warning Message
        if (window.confirm("¿Estás seguro de que quieres borrar este Producto?")) {
            axios.delete(`http://localhost:8080/api/producto/${this.props.producto.id}`)
                .then(res => {
                    console.log(res);
                    alert(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
                //Message

                window.location.reload(false);
        }

    }
    render() {
        return (
            <Card style={{width: "100%", marginTop: "30px", padding: "0px"}}>
                <Card.Header style={{backgroundColor: "#633967", color: "#efb810", fontSize: "20px", width: "100%"}}>
                {this.props.producto.id }   {" |  " + this.props.producto.nombre}
                <Button className="mx-3 btn-danger" style={{float: "right"}}  onClick={this.Cdelete} >Borrar</Button>
                <Button className="mx-3 btn-warning" style={{float: "right"}}  onClick={this.click} >Editar</Button>
                </Card.Header>
                <Container fluid style={{backgroundColor: "#ccc6cc", color: "black", fontSize: "20px", width: "100%"}}>
              <Row>
                <Col lg={3}>
                  <img src={this.props.producto.fotos} style={{width: "80%"}} />
                </Col>
                <Col lg={3}>
                    <h5>Descripción</h5>
                    <p>{this.props.producto.desc}</p>
                </Col>
                <Col lg={3}> 
                    <h5>Enlace de Compra</h5>
                    <p>{this.props.producto.enlaceCompra}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                    <h5>Precio</h5>
                    <p>{this.props.producto.precio}</p>
                </Col>
                <Col>
                    <h5>Comunidad</h5>
                    <p>{this.props.producto.comunidad}</p>
                </Col>
                <Col>
                    <h5>Autor</h5>
                    <p>{this.props.producto.autor}</p>
                </Col>
              </Row>
            </Container>
            </Card>
        )
    }
}

export default productoCard
