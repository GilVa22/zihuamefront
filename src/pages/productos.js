import React, { Component } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NewProducto from '../component/productos/newProducto';
import ProductoCard from '../component/productos/productoCard';

export class productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: [
                this.nombre= "nombre",
                this.precio = "precio",
                this.id = "id",
                this.enlaceCompra = "enlaceCompra",
                this.fotos = ["fotos"],
                this.desc = "desc",
                this.autor = "autor",
                this.comunidad = "comunidad",
                //this.nombre: "name",
            ],
            visuble: false,
            id: -1,
            comunidades: []
        }
        this.getAllProductos = this.getAllProductos.bind(this);
        this.setForms = this.setForms.bind(this);
    }   
    componentDidMount () {
        this.getAllProductos();
        this.getAllComunidades();
        //console.log("Mount");
    }
    setForms = (vis, gid) => {
        let found= false;
        for(let i = 0; i < this.state.producto.length; i++) {
            if(this.state.producto[i].id === gid) {
                this.setState({
                    visuble: vis,
                    id: i,
                });
                found=true;
            }
        }
        if(!found) {
            this.setState({
                visuble: vis,
                id: -1,
            });
        }


   }
   getAllComunidades (){
        axios.get("http://localhost:8080/api/comunidades")
        .then((respose) => respose.data,)
        .then(respose =>  {
        console.log("Call");
        let PedidosCompl = [];
        

        for(let a =0; a<respose.length; a++){
            PedidosCompl.push({
                    direccion: respose[a].direccion,
                    lat: respose[a].lat,
                    longi: respose[a].longi,
                    desc: respose[a].desc,
                    id: respose[a].id,
                    fotos: respose[a].fotos,
                    nombre: respose[a].nombre,
                    prod: respose[a].prod,
                    
                })  
        }
        console.log(PedidosCompl)
        this.setState({comunidades: PedidosCompl
        })
    }).catch(error => console.log(error));
    }

    getAllProductos (){
        axios.get("http://localhost:8080/api/productos")
        .then((respose) => respose.data,)
        .then(respose =>  {
        console.log("Call");
        let PedidosCompl = [];
        

        for(let a =0; a<respose.length; a++){
            PedidosCompl.push({
                nombre : respose[a].nombre,
                precio : respose[a].precio,
                id : respose[a].id,
                enlaceCompra : respose[a].enlaceCompra,
                fotos : respose[a].fotos,
                desc : respose[a].desc,
                autor : respose[a].autor,
                comunidad: respose[a].comunidad,
                })  
        }
        console.log(PedidosCompl)
        this.setState({producto: PedidosCompl
        })
    }).catch(error => console.log(error));
    }

    render() {

        const com = this.state.producto.map((productoss, i) => {
            return (
                <Row key={productoss.id}>
                    <ProductoCard key={i} producto={productoss} setForms={this.setForms}  />
                </Row>
            )
        });
        return (
            <div>
            
            
            <Container fluid>
                <Row>
                    <h1>Lista de Productos</h1>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>Buscador</Col>
                    <Col xs={12} lg={3}><Button>Buscar</Button></Col>
                    <Col xs={12} lg={3}><Button onClick={()=>{this.setState({visuble: true});}}>Agregar Nuevo</Button></Col>
                </Row>
                {this.state.visuble ? <Row  className="justify-content-center">
                <div style={{position: 'absolute', zIndex: 4, backgroundColor: "white", border: "1px solid black", width: "80%", 
                float: "center"}}
                className="mt-5"
               >
                <NewProducto 
                key={this.state.id}
                setForms={this.setForms}
                producto = {this.state.producto} 
                index={this.state.id}
                comunidades={this.state.comunidades}
                /> </div></Row> : null}

                {com}
              
            </Container>
            </div>
        )
    }
}

export default productos
