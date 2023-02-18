const Shimmer = () => {
  return (
    <div className="shimmer-page-body">
      {Array(50)
        .fill("")
        .map((e) => (
          <div className="shimmer-single-anime-card">
            <div className="shimmer-anime-image"></div>
            <p></p>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
