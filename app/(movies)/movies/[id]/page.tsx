import MovieInfo from "../../../../_components/movie-info";
import MovieVideos from "../../../../_components/movie-videos";
import {Suspense} from "react";

export default async function MovieDetail(
    {params: {id}}:{params:{id:string}}
) {
  return (
      <div>
        <h3>Movie detail page</h3>
        <Suspense fallback={<h2>loading movie info</h2>}>
          <MovieInfo id={id}/>
        </Suspense>
        <h4>Videos</h4>
        <Suspense fallback={<h2>loading movie videos</h2>}>
          <MovieVideos id={id}/>
        </Suspense>
      </div>
  );
}