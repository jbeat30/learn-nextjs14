import {API_URL} from "../_utils/api-url";

async function getVideo(id:string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 일부러 지연시키기
  // throw new Error('something broke...');
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
export default async function MovieVideos({id}:{id:string}) {
  const videos = await getVideo(id);
  return (
      <h6>{JSON.stringify(videos)}</h6>
  )
}