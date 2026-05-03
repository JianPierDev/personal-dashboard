import { CharacterItem } from "../components/character-item";
import { useGetCharacters } from "../hooks/use-get-characters";
import { Pagination } from "../components/pagination/pagination";
import { FetchError } from "../../../common/components/skeletons/fetch-error";
import { FilterCharacters } from "../components/filter-characters/filter-characters";
import { RickAndMortySkeletonPage } from "../skeleton/rick-and-morty-sekeleton-page";

export function RickAndMortyPage() {
  const { characters, search, setSearch, loading, error, page, setPage, info } = useGetCharacters();

  if (loading) return <RickAndMortySkeletonPage />;
  if (error && !loading) return <FetchError message={error} />;

  return (
    <div>
      <div className="flex gap-10 justify-center items-center mb-4 flex-wrap">
          <FilterCharacters search={search} setSearch={setSearch} />
          <Pagination page={page} setPage={setPage} info={info} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
