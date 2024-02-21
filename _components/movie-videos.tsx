import {API_URL} from "../_utils/api-url";
import styles from "../styles/movie-videos.module.css";
async function getVideo(id:string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 일부러 지연시키기
  // throw new Error('something broke...');
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
export default async function MovieVideos({id}:{id:string}) {
  const videos = await getVideo(id);
  return (
      <div className={styles.container}>
        {videos.map((video) => (
            <iframe
                key={video.id}
                src={`https://youtube.co/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}/>
        ))}
      </div>
  )
}