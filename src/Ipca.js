import React from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados',
    params: {
        formato:'json',
        dataInicial: '01/01/1999',
        dataFinal: '31/12/2100'

    }
});

export default api;
