import { useState } from "react";
import { User } from "./user";
import { Link } from "react-router";
import { useUser } from "../../providers/use-user";


export function Sidebar({ projects }) {
  const { user, setUser } = useUser()

  return (
    <aside className="bg-slate-800/30 rounded-2xl p-8 w-72">
      <div className="flex flex-col justify-between h-full">
        <div>
          <User />
          <div className="flex flex-col gap-3">
            {
              <ul className="flex flex-col gap-3">
                {projects.map((project) => (
                  <li className="bg-sky-600 rounded px-2 py-1" key={project.id}>
                    <Link to={project.basePath}>{project.name}</Link>
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
        <p className="text-[12px] text-center text-slate-600">
          Make with ♥ using React and Tailwind
        </p>
      </div>
    </aside>
  );
}
