import { Heart, ShieldQuestionMark, Skull } from "lucide-react";

export function DisplayStatus({status}) {
    if(status === "Alive") return <Heart className="text-red-500 fill-red-500"/>
    if(status === "Dead") return <Skull  className="text-gray-500"/>
    if(status === "unknown") return <ShieldQuestionMark className="text-gray-500" />

    return <ShieldQuestionMark className="text-gray-500" />
}