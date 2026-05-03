import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async ({ name = "" }) => {
  const response = await axios.get(API_URL)

  if( name ) {
    return { results : [response.data]}
  }

  return response.data;
};
