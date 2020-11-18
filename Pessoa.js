"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(cpf, nome, numero, carro) {
        this.cpf = cpf;
        this.nome = nome;
        this.numero = numero;
        this.carro = carro;
    }
    Pessoa.prototype.dizerCarro = function () {
        return this.carro;
    };
    Pessoa.prototype.Nome = function () {
        return this.nome;
    };
    Pessoa.prototype.ComprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
