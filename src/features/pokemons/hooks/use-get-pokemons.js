import { useEffect, useState } from "react"
import { getPokemons } from "../services/get-pokemons"

export const useGetPokemons = () => {
    const [ characters, setCharacters ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        getPokemons()
            .then(setCharacters)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [])

    return { pokemons: characters.results, loading, error }
}