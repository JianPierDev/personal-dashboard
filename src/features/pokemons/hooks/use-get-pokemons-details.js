import { useEffect, useState } from "react"
import { getPokemonsDetails } from "../services/get-pokemons-details"

export const useGetPokemonsDetails = (url) => {
    const [ details, setDetails ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        getPokemonsDetails(url)
            .then(setDetails)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [url])

    return { details, loading, error }
}