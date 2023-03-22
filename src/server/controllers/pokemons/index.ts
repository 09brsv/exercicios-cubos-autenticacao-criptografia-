import * as get from './Get';
import * as create from './Create';
import * as deletePokemon from './Delete';
import * as update from './Update';

export const pokemonControllers = {
  ...get,
  ...create,
  ...deletePokemon,
  ...update
};