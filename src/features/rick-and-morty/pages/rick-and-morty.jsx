import { FetchError } from "../../../common/components/skeletons/fetch-error"
import { CharacterItem } from "../components/character-item"
import { FilterCharacters } from "../components/filter-characters/filter-characters"
import { useGetCharacters } from "../hooks/use-get-characters"
import { RickAndMortySkeletonPage } from "../skeleton/rick-and-morty-sekeleton-page"

export function RickAndMortyPage() {
    const { characters, search, setSearch, loading, error } = useGetCharacters()

    if(loading) return <RickAndMortySkeletonPage />
    if(error && !loading) return <FetchError message={error}/>

    return(
        <div className="">
            <FilterCharacters search={search} setSearch={setSearch} />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {characters.map((character) => (
                    <CharacterItem key={character.id} character={character} />
                ))}
            </div>
        </div>
    )
}