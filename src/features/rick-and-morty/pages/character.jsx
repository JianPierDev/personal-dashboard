import { useNavigate, useParams } from "react-router";
import { useGetCharacterById } from "../hooks/use-get-character-by-id";
import { CharacterItem } from "../components/character-item";
import { ArrowLeft } from "lucide-react";

export function CharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate()
  const { character, loading, error } = useGetCharacterById(id);

  const handleNavigate = () => {
    navigate("/rick-and-morty")
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-full w-full flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-sm mb-6">
        <button
          onClick={handleNavigate}
          className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors group cursor-pointer"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to the list</span>
        </button>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-sky-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative">
          <CharacterItem character={character} withNavigation={false}/>
        </div>
      </div>
      <p className="mt-8 text-slate-600 text-sm italic">Character ID: {id}</p>
    </div>
  );
}
