import { Carro } from "./Carro";

export class Pessoa{
    private cpf: string;
    public nome: string;
    private numero: number;
    private carro : any
  
    constructor(cpf: string, nome: string, numero: number, carro: any) {
      this.cpf = cpf;
      this.nome = nome;
      this.numero = numero;
      this.carro = carro;
    }
    
    public dizerCarro(): string {
      return this.carro
    }
  
    public Nome(): string{
      return this.nome;
    }
    public ComprarCarro(carro: Carro) : void{
      this.carro = carro;
    } 

    public dizerCarroQueTem(): Carro{
        return this.carro;
    }
}