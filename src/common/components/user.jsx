import Me from "../../assets/me.png";
import { useUser } from "../../providers/use-user";


export function User() {
  const { user } = useUser()

  return (
    <div className="flex flex-col items-center border-b border-slate-600 pb-3 mb-3">
      <div className="w-25 h-25 ring-2 mx-auto rounded-full text-sky-600 mb-2">
        <img className="block mx-auto w-20" src={user.avatar} alt="profile" />
      </div>
      <h2 className="text-lg text-center text-sky-600">{user.name}</h2>
      <p className="text-sm text-slate-400">{user.profession}</p>
    </div>
  );
}
