import { toQueryString } from "@/lib/utils";
import { ImagesParams, ImagesResponse } from "@/types/api/image";

export async function getImages(params: ImagesParams): Promise<ImagesResponse> {
  const queryString = toQueryString(params);
  const res = await fetch(
    `https://pixabay.com/api/?lang=ko&key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&${queryString}`,
    {
      next: { revalidate: 60 * 5 },
    }
  );
  return res.json();
}
