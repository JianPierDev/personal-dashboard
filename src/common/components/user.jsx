import Me from "../../assets/me.png";

export function User() {
  return (
    <div className="flex flex-col items-center border-b border-slate-600 pb-3 mb-3">
      <div className="w-25 h-25 ring-2 mx-auto rounded-full text-sky-600 mb-2">
        <img className="block mx-auto w-20" src={Me} alt="profile" />
      </div>
      <h2 className="text-lg text-center text-sky-600">&lt;Jian /&gt;</h2>
      <p className="text-sm text-slate-400">Software Developer</p>
    </div>
  );
}
