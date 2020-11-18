"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var carro1 = new Carro_1.Carro('Ferrari', 4);
var carro2 = new Carro_1.Carro('Mercedes', 4);
var carro3 = new Carro_1.Carro('Hyndai', 4);
var listaDeCarros = [carro1, carro2, carro3];
var concessionaria = new Concessionaria_1.Concessionaria('Av da maldade', listaDeCarros);
var cliente = new Pessoa_1.Pessoa('João', '216411315', 56745649, 'Fox');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarro()) {
        cliente.ComprarCarro(carro);
    }
});
console.log(cliente.dizerCarro());
