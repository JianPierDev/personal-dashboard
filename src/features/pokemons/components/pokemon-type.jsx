export function PokemonType({ types }) {
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

  return (
    <div className="flex justify-center gap-2 mt-2">
      {types.map((type) => (
        <span
          key={type.type.name}
          className={`px-2 py-1 text-xs rounded-full font-semibold ${
            typeColors[type.type.name] || "bg-slate-500"
          }`}
        >
          {type.type.name}
        </span>
      ))}
    </div>
  );
}
