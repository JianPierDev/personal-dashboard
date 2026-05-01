import { useEffect, useState } from "react";
import { getPokemonCharacterById } from "../services/get-pokemons-character-by-id";

export const useGetPokemonsCharacterById = (id) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemonCharacterById(id)
      .then(setCharacter)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { character, loading, error };
};
