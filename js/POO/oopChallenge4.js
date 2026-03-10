/*
Exercício:
Implemente uma classe de gerenciamento de array que você possa determinar o tamanho fixo do array, 
além de adicionar e remover valores, sem uso de métodos de array + validações.
*/

class arrayManager {
  constructor(length) {
    this.array = [];
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (length < 0) {
      console.log("O array não pode ter o tamanho menor que 0!");
      return;
    }

    if (length < this.array.length) {
      console.log("O novo tamanho é menor que o array já existente!");
      return;
    }
    this._length = length;
  }

  addValue(value) {
    if (this.array.length >= this.length) {
      console.log(
        "Não pode adicionar mais nenhum valor ao array, limite máximo atingido!",
      );
      return;
    }
    this.array[this.array.length] = value;
  }

  removeValue(value) {
    let found = false;

    if (this.array.length === 0) {
      console.log("O array não contém nenhum valor!");
      return;
    }

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        this.array.splice(i, 1);
        console.log(`O valor ${value} foi retirado!`);
        found = true;
        break;
      }

      if (!found) {
        console.log("Valor não encontrado! Insire outro valor correspondente!");
      }
    }
  }

  showArray() {
    console.log(this.array);
  }
}

let array = new arrayManager(3);
