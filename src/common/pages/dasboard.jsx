import { Link, Outlet } from "react-router";
import { Sidebar } from "../components/sidebar";
import { projects } from "../config/projects";

export function Dashboard() {
  return (
    <div className="bg-slate-950 h-screen text-slate-200">
      <div className="flex gap-8 p-8 w-[90%] max-w-7xl mx-auto h-full">
        <Sidebar projects={projects}/>
        <main className="flex-1 bg-slate-800/30 rounded-2xl p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
