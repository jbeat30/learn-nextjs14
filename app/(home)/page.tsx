import Link from "next/link";
import {NextPage} from "next";
import {API_URL} from "../../_utils/api-url";

export const metadata = {
  title: 'Home',
}

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 일부러 지연시키기
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
export default async function Page() {
  const movies = await getMovies();
  return (
      <div>
        <h1>Home</h1>
        <div>{movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}</div>
      </div>
  );
}