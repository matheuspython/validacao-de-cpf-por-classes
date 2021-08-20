class Valida {
  constructor(cpf) {
    this.cpf = cpf
    this.cpfTeste = undefined
  }

  converte() {
    this.cpfTeste = this.cpf.replace(/\D+/g, '').slice(0,-2)
  }

  cpfArray(){
    this.cpfTeste = Array.from(this.cpfTeste)
  }

  calculaNumeroFinal() {
    let range = this.cpfTeste.length + 1
    let total = this.cpfTeste.reduce((ac, value) =>{
      ac += range * Number(value);
      range--;
      return ac
    }, 0)
    let digito = 11 - (total % 11)
    if(digito > 9) {
      digito = '0'
    }else{
      digito = String(digito)
    }

    this.cpfTeste.push(digito)

  }
}

// const cpf = '705.484.450-52'

// const teste = new Valida(cpf)

// teste.converte()

// teste.cpfArray()

// teste.calculaNumeroFinal()
// teste.calculaNumeroFinal()

const compara = (cpf, cpfTeste) => {
  cpfTeste = cpfTeste.reduce((ac, value) => ac +=value)
  cpf = cpf.replace(/\D+/g, '')
  console.log(cpf ===cpfTeste)
  return cpf ===cpfTeste
}
// compara(teste.cpf, teste.cpfTeste)


document.addEventListener('click', e => {
  el = e.target;
  if(el.classList.contains('btn-valida')) {
 
    const teste = new Valida(document.querySelector('.cpf').value)

    teste.converte()
    teste.cpfArray()
    teste.calculaNumeroFinal()
    teste.calculaNumeroFinal()
    
    const comparacao = compara(teste.cpf, teste.cpfTeste)
    if(comparacao) return alert('cpf valido')
    alert('cpf invalido')
  }
})