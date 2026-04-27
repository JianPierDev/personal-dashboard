import { Heart, Mars } from "lucide-react";
import { DisplayGender } from "../utils/display-gender";

export function Characters({ character }) {
  const { id, name, status, species, type, gender, origin, location, image } =
    character;

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700 cursor-pointer hover:border-sky-600 transition-all duration-300">
      <div className="h-60 overflow-hidden">
        <img className="w-100 transform scale-100 hover:scale-105 transition-all duration-300 ease-in-out" src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-2 p-4 text-slate-400">
        <h3 className="text-lg">{name}</h3>
        <div className="flex justify-between items-center">
            <p className="flex  gap-2">Gender:
                <DisplayGender gender={gender}/>
            </p>
            <p className="flex gap-2">Status: 
                <Heart className="text-red-500 fill-red-500" />
            </p>
        </div>
        <div className="flex flex-col gap-2 text-slate">
            <p>Specie: <span className="text-sm text-slate-500">{species}</span></p>
            <p>Type: <span className="text-sm text-slate-500">{type || "---"}</span></p>
            <p>Origin: <span className="text-sm text-slate-500">{origin.name}</span></p>
            <p>Location: <span className="text-sm text-slate-500">{location.name}</span></p>
        </div>
      </div>
    </div>
  );
}
