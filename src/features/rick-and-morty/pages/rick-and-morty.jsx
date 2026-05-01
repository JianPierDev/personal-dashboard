import { CharacterItem } from "../components/character-item"
import { useGetCharacters } from "../hooks/use-get-characters"

export function RickAndMortyPage() {
    const { characters, loading, error } = useGetCharacters()

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            ))}
        </div>
    )
}