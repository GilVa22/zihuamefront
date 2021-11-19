import React, { Component } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ComunidadCard from '../component/comunidadCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NewComunidad from '../component/newComunidad';

export class comunidades extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comunidades: [
                this.direccion = "direccion",
                this.lat = "lat",
                this.longi = "longi",
                this.desc = "desc",
                this.id = 0,
                this.fotos = ["fotos", "foto"],
                this.prod = ["prod"],
                //this.nombre: "name",
            ],
            visuble: false,
            id: 0,
        }
        this.getAllComunidades = this.getAllComunidades.bind(this);
        this.setForms = this.setForms.bind(this);
    }   
    componentDidMount () {
        this.getAllComunidades();
        console.log("Mount");
    }
    setForms = (vis) => {
       this.setState({
            visuble: vis
    });
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
                    prod: respose[a].prod,
                })  
        }
        console.log(PedidosCompl)
        this.setState({comunidades: PedidosCompl
        })
    }).catch(error => console.log(error));
    }
                /*<div key={i}>
                    <h1>{comunidad.direccion}</h1>
                    <p>{comunidad.lat}</p>
                    <p>{comunidad.longi}</p>
                    <p>{comunidad.desc}</p>
                    <p>{comunidad.id}</p>
                    <p>{comunidad.fotos}</p>
                    <p>{comunidad.prod}</p>
                </div>*/
    render() {

        const com = this.state.comunidades.map((comunidad, i) => {
            return (
                <Row key={i}>
                    <ComunidadCard key={comunidad.id} comunidad={comunidad} setForms={this.setForms} />
                </Row>
            )
        });
        return (
            <div>
            
            
            <Container fluid>
                <Row>
                    <h1>Lista de Comunidades</h1>
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
                <NewComunidad 
                key={this.state.id}
                setForms={this.setForms}
                comunidad = {this.state.comunidades}  /> </div></Row> : null}

                {com}
              
            </Container>
            </div>
        )
    }
}

export default comunidades
