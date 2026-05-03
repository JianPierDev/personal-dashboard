export const Pagination = ({ page, setPage, info }) => {
    const handlePrev = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }

  return (
    <div>
      <button onClick={handlePrev} disabled={!info?.prev}>Prev</button>
      <p>{page}</p>
      <button onClick={handleNext} disabled={!info?.next}>Next</button>
    </div>
  );
};
