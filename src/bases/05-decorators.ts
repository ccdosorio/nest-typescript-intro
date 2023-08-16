// Decorador: no es mas que una funcion. Accede a la definicion de la clase, metodo, propiedad. Expandir clases

class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log('NO QUIERO');
  }

  speak() {
    console.log('NO QUIERO HABLAR!!');
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    console.log(target);
    return NewPokemon;
  };
};

// Estamos sobreescribiendo la clase
@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(1, 'Charmander');

charmander.speak();
charmander.scream();
