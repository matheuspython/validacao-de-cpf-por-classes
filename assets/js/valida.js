const btn = document.querySelector('.btn-valida');
const input = document.querySelector('.cpf');


class Valida {
  constructor(cpf) {
    this.cpf = cpf
  }
  converte() {
    return this.cpf.replace(/\D+/g, '')
  }

}