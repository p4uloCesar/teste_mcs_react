import React from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados',
    params: {
        formato:'json',
        dataInicial: '30/04/2021',
        dataFinal: '30/04/2022'

    }
});

export default api;
