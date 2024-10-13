import { useGetFilms } from "../../../generalQuery.js";
import DetailsLoader from "../../atoms/DetailsLoader/index.jsx";

function MoviesList({ films }) {
  const movies = useGetFilms(films);
  const { isLoading, data } = normalizeData(movies);
  if (!films.length) return null;
  return (
    <div data-testid="molecules-moviesList-container">
      <p className="text-slate-300 text-2xl">Movies List: </p>
      {isLoading ? (
        <DetailsLoader />
      ) : (
        <ol className="list-disc ml-9" data-testid="molecules-moviesList-ol">
          {data.map((movie) => (
            <li className="text-slate-200 text-xl capitalize" key={movie.title}>
              {movie.title}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function normalizeData(data) {
  let result = [];
  for (let filmData of data) {
    if (filmData.isLoading)
      return {
        isLoading: true,
      };
    if (!filmData.isError) result.push(filmData.data);
  }
  return {
    isLoading: false,
    data: result,
  };
}

export default MoviesList;
