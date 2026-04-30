import { useCounter } from "../store/zustand-example-store";

export function ZustandExamplePage() {
    const { counter, increment, decrement } = useCounter();

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-8">
            {/* Contenedor del Contador */}
            <div className="flex flex-col items-center gap-2">
                <span className="text-slate-500 uppercase tracking-widest text-sm font-semibold">
                    Zustand Counter
                </span>
                <h1 className="text-8xl font-bold bg-linear-to-t from-slate-400 to-white bg-clip-text text-transparent">
                    {counter}
                </h1>
            </div>

            {/* Panel de Acciones */}
            <div className="flex gap-4 p-4 bg-slate-900/50 rounded-3xl border border-slate-700/50 shadow-xl">
                <button 
                    className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-medium transition-all active:scale-95 shadow-lg shadow-sky-900/20"
                    onClick={decrement}
                >
                    Decrementar
                </button>
                
                <button 
                    className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-white text-slate-950 font-bold transition-all active:scale-95 shadow-lg shadow-white/10"
                    onClick={increment}
                >
                    Incrementar
                </button>
            </div>
            
            <p className="text-slate-500 text-sm italic">
                Sincronizado globalmente con Zustand
            </p>
        </div>
    );
}