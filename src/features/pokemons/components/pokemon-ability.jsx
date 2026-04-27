export function PokemonAbility({ abilities }) {
  return (
    <div className="text-center">
      <p className="text-slate-400 text-xs">Abilities</p>
      <div className="flex flex-wrap justify-center gap-1 mt-1">
        {abilities.map((ability) => (
          <span
            key={ability.ability.name}
            className="bg-slate-700 px-2 py-1 rounded text-xs capitalize"
          >
            {ability.ability.name}
          </span>
        ))}
      </div>
    </div>
  );
}
