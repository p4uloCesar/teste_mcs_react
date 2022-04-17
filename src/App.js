import './App.css';

import React, {useEffect} from 'react';
import api from "./Ipca";
import {Form} from "react-bootstrap";

export default function App() {
    const [dataSum, setDataSum] = React.useState(0)
    const [data, setData] = React.useState([])
    const [init, setDateInit] = React.useState('30/04/2021')
    const [final, setDateFinal] = React.useState('30/04/2022')

    const handleClick = (e) => {
        var [year, month, day] = init.split('-');
        const dataInicial = `${day}/${month}/${year}`;
        [year, month, day] = final.split('-');
        const dataFinal = `${day}/${month}/${year}`;
        api
            .get('', {
                params: {
                    dataInicial: dataInicial,
                    dataFinal: dataFinal
                }
            })
            .then((response) => {
                setData(response.data);
                var sumData = 0;
                response.data.forEach(d => {
                    sumData += parseFloat(d.valor);
                })
                setDataSum(sumData);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    };

    return (
        <div className='container'>
            <Form>
                <Form.Group className="mb-3" controlId="formDates">
                    <Form.Label>Data Inicial</Form.Label>
                    <Form.Control onChange={event => setDateInit(event.target.value)} class='col-md' type="date"/>
                    <Form.Label>Data Final</Form.Label>
                    <Form.Control onChange={event => setDateFinal(event.target.value)} type="date"/>
                </Form.Group>

                <a className="btn btn-primary" onClick={handleClick}>
                    Buscar
                </a>

            </Form>
            <div style={{marginTop: '20px'}} className="mb-3">
                <p>Valor IPCA : {dataSum}</p>
            </div>
            <div className='col-md w-100 d-flex justify-content-center'>


                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Data</th>
                        <th scope="col">Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map(item => (
                        <tr>
                            <th scope="row">1</th>
                            <td>{item.data}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    );

}
