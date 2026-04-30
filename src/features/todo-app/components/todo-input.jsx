import { Plus } from "lucide-react";
import { useState } from "react";

export function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() === "") return;

    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex gap-3 mb-12">
      <input
        className="flex-1 bg-slate-800/50 border border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-500"
        type="text"
        placeholder="What are your plans for today?..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-sky-600 hover:bg-sky-500 active:scale-95 text-white flex items-center gap-1 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20 cursor-pointer"
        onClick={handleClick}
      >
        <Plus size={24} />
        <span>Add</span>
      </button>
    </div>
  );
}
