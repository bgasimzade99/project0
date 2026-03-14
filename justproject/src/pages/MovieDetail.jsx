import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const favorite = movie && isFavorite(movie.id);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to load movie");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (!movie) return;
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  if (loading) {
    return (
      <div className="movie-detail">
        <div className="movie-detail-loading">Loading...</div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="movie-detail">
        <div className="movie-detail-error">
          <h2>{error || "Movie not found"}</h2>
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>
    );
  }

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;
  const trailer = movie.videos?.results?.find((v) => v.site === "YouTube" && v.type === "Trailer");
  const cast = movie.credits?.cast?.slice(0, 10) || [];

  return (
    <div className="movie-detail">
      <div className="movie-detail-hero" style={backdrop ? { backgroundImage: `url(${backdrop})` } : {}}>
        <div className="movie-detail-backdrop" />
        <div className="movie-detail-hero-content">
          <div className="movie-detail-poster-wrap">
            {poster && <img src={poster} alt={movie.title} className="movie-detail-poster" />}
          </div>
          <div className="movie-detail-info">
            <h1>{movie.title}</h1>
            {movie.tagline && <p className="tagline">"{movie.tagline}"</p>}
            <div className="movie-detail-meta">
              <span>{movie.release_date?.split("-")[0]}</span>
              {movie.runtime && <span>{movie.runtime} min</span>}
              {movie.vote_average && (
                <span className="rating">★ {movie.vote_average.toFixed(1)}</span>
              )}
            </div>
            {movie.genres?.length > 0 && (
              <div className="genres">
                {movie.genres.map((g) => (
                  <span key={g.id} className="genre-tag">{g.name}</span>
                ))}
              </div>
            )}
            {movie.overview && <p className="overview">{movie.overview}</p>}
            <div className="movie-detail-actions">
              <button
                className={`favorite-detail-btn ${favorite ? "active" : ""}`}
                onClick={onFavoriteClick}
              >
                {favorite ? "♥ Remove from Favorites" : "♥ Add to Favorites"}
              </button>
              {trailer && (
                <a
                  href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trailer-btn"
                >
                  ▶ Watch Trailer
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {cast.length > 0 && (
        <section className="cast-section">
          <h3>Cast</h3>
          <div className="cast-list">
            {cast.map((c) => (
              <div key={c.id} className="cast-item">
                {c.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${c.profile_path}`}
                    alt={c.name}
                  />
                ) : (
                  <div className="cast-placeholder" />
                )}
                <span className="cast-name">{c.name}</span>
                <span className="cast-role">{c.character}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="movie-detail-back-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default MovieDetail;
