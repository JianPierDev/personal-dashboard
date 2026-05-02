import { useEffect, useState } from "react";
import { getCharacters } from "../services/get-characters";
import { useDebounce } from "use-debounce";

export const useGetCharacters = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 1000);

  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters({ name: debouncedSearch })
      .then(setCharacters)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [debouncedSearch]);

  return { characters: characters.results, search, setSearch, loading, error };
};
