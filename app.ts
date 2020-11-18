class Carro{

  private modelo: string;
  public numeroDePortas: number;
  private velocidade: number = 0;

  constructor(modelo: string, numeroDePortas: number) {
    this.modelo = modelo;
    this.numeroDePortas = numeroDePortas;
  }

  public acelerar(): void{
    this.velocidade = this.velocidade + 10;
  }

  public para(): void{
    this.velocidade = 0;
  }

  public velocidadeAtual(): number{
    return this.velocidade;
  }

  public ModeloCarro() {
    return this.modelo; 
  }
}


class Concessionaria {
  private endereco: string
  private listaDeCarros: Array<Carro>

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndreco(): string{
    return this.endereco;
  }

  public mostrarListaDeCarros(): Array<Carro>{
    return this.listaDeCarros;
  }

}


class Pessoa{
  private cpf: string;
  public nome: string;
  private numero: number;
  public carro: string;

  constructor(cpf: string, nome: string, numero: number, carro: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.numero = numero;
    this.carro = carro;
  }
  
  public dizeCarro(): string {
    return this.carro
  }

  public Nome(): string{
    return this.nome;
  }
}

let carro1 = new Carro('Fox', 4);
let carro2 = new Carro('Fiesta',4);
let carro3 = new Carro('Ferrari', 4);
let carro4 = new Carro('Mercedes', 4);

let listaDeCarros: Carro[] = [carro1, carro2, carro3];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

console.log(concessionaria.mostrarListaDeCarros());