import { Heart, Mars } from "lucide-react";
import { DisplayGender } from "../utils/display-gender";
import { DisplayStatus } from "../utils/display-status";
import { useNavigate } from "react-router";

export function CharacterItem({ character, withNavigation = true }) {
  const { id, name, status, species, type, gender, origin, location, image } =
    character;

  const navigate = useNavigate()
  
  const handleNavigate = () => {
    if(!withNavigation) return

    navigate(`/rick-and-morty/character/${id}`)
  }

  return (
    <div className={`"rounded-2xl overflow-hidden border border-slate-700 hover:border-sky-600 transition-all duration-300 ${withNavigation && "cursor-pointer"}`} onClick={handleNavigate}>
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
                <DisplayStatus status={status} />
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
