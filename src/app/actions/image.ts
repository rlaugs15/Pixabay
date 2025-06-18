import { toQueryString } from "@/lib/utils";
import { ImagesParams, ImagesResponse } from "@/types/api/image";

export async function getImages(
  params: ImagesParams,
  options?: NextFetchRequestConfig
): Promise<ImagesResponse> {
  const queryString = toQueryString(params);
  const res = await fetch(
    `https://pixabay.com/api/?lang=ko&key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&${queryString}`,
    {
      next: {
        revalidate: 300,
        ...options,
      },
    }
  );
  return res.json();
}
