import { Pokemon } from "../components/pokemon"
import { useGetPokemons } from "../hooks/use-get-pokemons"

export function PokemonsPage() {
    const { pokemons, loading, error } = useGetPokemons()

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return(
        <div className="grid grid-cols-3 gap-8">
            {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    )
}