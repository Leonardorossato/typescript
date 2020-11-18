"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.para = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Carro.prototype.ModeloCarro = function () {
        return this.modelo;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndreco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(cpf, nome, numero, carro) {
        this.cpf = cpf;
        this.nome = nome;
        this.numero = numero;
        this.carro = carro;
    }
    Pessoa.prototype.dizeCarro = function () {
        return this.carro;
    };
    Pessoa.prototype.Nome = function () {
        return this.nome;
    };
    return Pessoa;
}());
var carro1 = new Carro('Fox', 4);
var carro2 = new Carro('Fiesta', 4);
var carro3 = new Carro('Ferrari', 4);
var carro4 = new Carro('Mercedes', 4);
var listaDeCarros = [carro1, carro2, carro3];
var concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
