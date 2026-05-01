import { useParams, useNavigate } from "react-router";
import { useGetPokemonsCharacterById } from "../hooks/use-get-pokemons-character-by-id";
import { PokemonType } from "../components/pokemon-type"; // Reutilizamos tus componentes
import { PokemonAbility } from "../components/pokemon-ability";
import { ArrowLeft, Ruler, Weight, Zap } from "lucide-react";

export function PokemonCharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { character, loading, error } = useGetPokemonsCharacterById(id);

  if (loading)
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-slate-400 animate-pulse">
          Consultando la Pokédex...
        </p>
      </div>
    );

  if (error) return <p className="text-red-500">{error}</p>;

  const {
    name,
    sprites,
    types,
    height,
    weight,
    abilities,
    stats,
    base_experience,
  } = character;

  return (
    <div className="max-w-4xl mx-auto p-6 text-slate-200">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-800/30 rounded-3xl p-8 border border-slate-700 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center bg-slate-700/20 rounded-2xl p-6">
          <span className="text-slate-500 font-mono text-xl self-start">
            #{id.toString().padStart(3, "0")}
          </span>
          <img
            src={sprites.other["official-artwork"].front_default}
            alt={name}
            className="w-64 h-64 object-contain drop-shadow-[0_0_20px_rgba(0,163,255,0.3)]"
          />
          <h1 className="text-4xl font-bold capitalize mt-4 mb-2">{name}</h1>
          <PokemonType types={types} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-xl flex items-center gap-3 border border-slate-700/50">
              <Ruler className="text-sky-500" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Altura</p>
                <p className="font-bold">{height / 10} m</p>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl flex items-center gap-3 border border-slate-700/50">
              <Weight className="text-sky-500" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Peso</p>
                <p className="font-bold">{weight / 10} kg</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3 flex items-center gap-2">
              <Zap size={16} className="text-amber-400" /> Skills
            </h3>
            <PokemonAbility abilities={abilities} />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-500 uppercase mb-1">
              Estadísticas Base
            </h3>
            {stats.map((stat) => (
              <div key={stat.stat.name} className="group">
                <div className="flex justify-between text-xs mb-1 uppercase">
                  <span>{stat.stat.name.replace("-", " ")}</span>
                  <span className="font-bold text-sky-400">
                    {stat.base_stat}
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-sky-500 h-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.min((stat.base_stat / 150) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-700 text-center">
            <p className="text-xs text-slate-500">
              Experiencia Base:{" "}
              <span className="text-slate-300">{base_experience}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
