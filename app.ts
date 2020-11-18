import { Pessoa } from './Pessoa';
import { Carro } from "./Carro";
import { Concessionaria } from "./Concessionaria";


let carro1 = new Carro('Ferrari', 4);
let carro2 = new Carro('Mercedes', 4);
let carro3 = new Carro('Hyndai', 4);

let listaDeCarros : Carro[] = [carro1, carro2, carro3];

let concessionaria = new Concessionaria('Av da maldade', listaDeCarros);
  
let cliente = new Pessoa('João', '216411315', 56745649,'Fox');

concessionaria.mostrarListaDeCarros().map((carro: Carro)=>{
  if(carro['modelo'] == cliente.dizerCarro()){
    cliente.ComprarCarro(carro);
  }
});

console.log(cliente.dizerCarro());