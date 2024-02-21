import {API_URL} from "../_utils/api-url";

async function getMovies(id:string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // 일부러 지연시키기
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}:{id:string}) {
  const movie = await getMovies(id);
  return (
      <h6>{JSON.stringify(movie)}</h6>
  )
}