import MovieInfo from "../../../../_components/movie-info";
import MovieVideos from "../../../../_components/movie-videos";
import {getMovie} from "../../../../_components/movie-info";
import {Suspense} from "react";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({params: {id}}:IParams) {
  return (
      <div>
        <Suspense fallback={<h2>loading movie info</h2>}>
          <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h2>loading movie videos</h2>}>
          <MovieVideos id={id}/>
        </Suspense>
      </div>
  );
}