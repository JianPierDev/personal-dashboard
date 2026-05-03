export const Pagination = ({ page, setPage, info }) => {
  const handlePrev = () => {
    if (info?.prev) setPage(page - 1);
  };

  const handleNext = () => {
    if (info?.next) setPage(page + 1);
  };

  const prevDisabled = !info?.prev;
  const nextDisabled = !info?.next;

  return (
    <div className="flex items-center gap-4 bg-slate-800/40 border border-slate-700 rounded-xl px-4 py-2">
      <button
        onClick={handlePrev}
        disabled={prevDisabled}
        className={`px-3 py-1.5 rounded-lg text-sm transition
        ${
          prevDisabled
            ? "text-slate-500 cursor-not-allowed"
            : "text-slate-200 hover:bg-slate-700/60"
        }`}
      >
        ←
      </button>
      <span className="text-sm text-slate-300">
        Página <span className="text-white font-medium">{page}</span>
      </span>
      <button
        onClick={handleNext}
        disabled={nextDisabled}
        className={`px-3 py-1.5 rounded-lg text-sm transition
        ${
          nextDisabled
            ? "text-slate-500 cursor-not-allowed"
            : "text-slate-200 hover:bg-slate-700/60"
        }`}
      >
        →
      </button>
    </div>
  );
};
