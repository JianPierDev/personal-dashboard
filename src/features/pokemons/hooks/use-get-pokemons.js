import { useEffect, useState } from "react"
import { getPokemons } from "../services/get-pokemons"
import { useDebounce } from "use-debounce"

export const useGetPokemons = () => {
    const [ search, setSearch ] = useState("")
    const [debouncedSearch] = useDebounce(search, 1000)

    const [ characters, setCharacters ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        getPokemons({name: debouncedSearch})
            .then(setCharacters)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [debouncedSearch])

    return { pokemons: characters.results, search, setSearch, loading, error }
}