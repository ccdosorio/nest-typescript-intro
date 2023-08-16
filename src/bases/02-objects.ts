export const pokemonIds = [1, 20, 30, 50];

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const pikachu: Pokemon = {
  name: 'Pikachu',
  id: 20,
};

export const charmander: Pokemon = {
  id: 2,
  name: 'Charmander',
  age: 20,
};

export const pokemons: Pokemon[] = [];
pokemons.push(charmander);
pokemons.push(pikachu);

console.log(pokemons);
