const MoviesPageQueryItem = ({ poster, baseUrl, title, defaultImage }) => {
  return (
    <div>
      <div>
        <img src={poster ? `${baseUrl}${poster}` : defaultImage} alt={title} />
      </div>

      <h3 className="MoviesPageQuery-title">{title}</h3>
    </div>
  );
};

export default MoviesPageQueryItem;
