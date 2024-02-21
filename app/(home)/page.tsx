import Link from "next/link";
import {API_URL} from "../../_utils/api-url";
import styles from "../../styles/Home.module.css";
import Movie from "../../_components/movie";

export const metadata = {
  title: 'Home',
}

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 일부러 지연시키기
  const response = await fetch(API_URL);
  return await response.json();
}

export default async function Page() {
  const movies = await getMovies();
  return (
      <div className={styles.container}>
        {movies.map((movie: { id: number; title: string; poster_path: string; }) => {
        return (
            <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
            />
        );
      })}
    </div>
  );
}