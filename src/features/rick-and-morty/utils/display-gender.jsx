import { Mars, ShieldQuestionMark, Venus } from "lucide-react";

export function DisplayGender({gender}) {
    if(gender === 'Female') return <Venus className="text-pink-500" />
    if(gender === 'Male') return <Mars className="text-blue-500" />
    if(gender === "Unknow") return <ShieldQuestionMark className="text-gray-500" />
    
    return <ShieldQuestionMark className="text-gray-500" />
}