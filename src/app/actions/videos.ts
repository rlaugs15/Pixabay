import { toQueryString } from "@/lib/utils";
import { VideosParams, VideosResponse } from "@/types/api/video";

export async function getVideos(params: VideosParams): Promise<VideosResponse> {
  const queryString = toQueryString(params);
  const res = await fetch(
    `https://pixabay.com/api/videos/?lang=ko&key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&${queryString}`,
    {
      next: { revalidate: 60 * 5 },
    }
  );
  return res.json();
}
