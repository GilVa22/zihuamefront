import React, { Component } from 'react'
import axios from 'axios';
export class comunidades extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comunidades: [],
        }
        this.getAllComunidades = this.getAllComunidades.bind(this);
    }   
    conponentDidMount() {
        this.getAllComunidades();
    }
    getAllComunidades = () =>{
        axios.get("http://localhost:8080/api/comunidades")
        .then((respose) => respose.data,)
        .then(respose =>  {

        let PedidosCompl = [];
            console.log("hola");

        for(let a =0; a<respose.length; a++){
            let unPedido = [];
            let pedidoAct = respose[a].idPedido;
            while(a<respose.length && pedidoAct===respose[a].idPedido){
                unPedido.push({
                    direccion: respose[a].direccion,
                    lat: respose[a].lat,
                    longi: respose[a].longi,
                    desc: respose[a].desc,
                    id: respose[a].id,
                    fotos: respose[a].fotos,
                    prod: respose[a].prod,
                })
                a++;
            }
            PedidosCompl.push(unPedido);
        }
        console.log(PedidosCompl)
        this.setState({comunidades: PedidosCompl
        })
    });
    }

    render() {
        return (
            <div>
                Hola
            </div>
        )
    }
}

export default comunidades
