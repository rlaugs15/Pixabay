import axios, { AxiosInstance } from "axios";
import { ImagesParams, ImagesResponse } from "./types/imageApi";
import { VideosParams, VideosResponse } from "./types/videoApi";

const BASE_URL = "https://pixabay.com/api";
const VIDEO_BASE_URL = "https://pixabay.com/api/videos";
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

class API {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      params: {
        key: API_KEY,
      },
    });
  }

  async getImages({
    query,
    image_type,
    orientation,
    category,
    page,
    per_page,
    order = true,
  }: ImagesParams): Promise<ImagesResponse> {
    const res = await this.instance.get(BASE_URL, {
      params: {
        q: query,
        lang: "ko",
        image_type,
        orientation,
        category,
        page,
        per_page,
        order,
      },
    });
    return res.data;
  }

  async getVideos({
    query,
    video_type,
    category,
    editors_choice,
    page,
    per_page,
  }: VideosParams): Promise<VideosResponse> {
    const res = await this.instance.get(VIDEO_BASE_URL, {
      params: {
        q: query,
        lang: "ko",
        video_type,
        category,
        editors_choice,
        page,
        per_page,
      },
    });
    return res.data;
  }
}

const api = new API();
export default api;
