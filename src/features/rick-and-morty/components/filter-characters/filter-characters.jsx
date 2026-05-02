import { Search } from "lucide-react";

export function FilterCharacters({search, setSearch}) {
  return (
    <div className="mb-8 bg-white/10 p-3 rounded-lg flex gap-2">
      <Search />
      <input
        className="flex-1 focus:outline-none"
        type="text"
        placeholder="Search a character..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
