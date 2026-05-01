import { useNavigate } from "react-router";
import { useGetPokemonsDetails } from "../hooks/use-get-pokemons-details";
import { PokemonAbility } from "./pokemon-ability";
import { PokemonType } from "./pokemon-type";

const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400 text-black",
  psychic: "bg-pink-500",
  ice: "bg-cyan-300 text-black",
  dragon: "bg-indigo-500",
  dark: "bg-gray-700",
  fairy: "bg-pink-300 text-black",
  normal: "bg-gray-400 text-black",
};

export function Pokemon({ pokemon, withNavigate = true }) {
  const { name, url } = pokemon;
  const { details, loading, error } = useGetPokemonsDetails(url);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if(!withNavigate) return

    navigate(`/pokemons/character/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { height, weight, sprites, types, id, abilities } = details;

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-be from-slate-800 to-slate-900 border border-slate-700 cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="flex justify-between items-center px-4 py-2 bg-slate-700/40">
        <h2 className="text-lg font-bold capitalize">{name}</h2>
        <span className="text-sm text-slate-400">#{id}</span>
      </div>
      <div className="flex justify-center items-center h-48 bg-slate-700/20">
        <img
          className="h-36 w-36 object-contain transition-transform duration-300 hover:scale-110"
          src={sprites.other["official-artwork"].front_default}
          alt={name}
        />
      </div>
      <PokemonType types={types} />
      <div className="p-4 text-sm text-slate-200 flex flex-col gap-2">
        <div className="flex justify-around">
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
        </div>
        <PokemonAbility abilities={abilities} />
      </div>
    </div>
  );
}
