import axios, { AxiosInstance } from "axios";
import { ImagesParams, ImagesResponse } from "./types/imageApi";
import { VideosParams, VideosResponse } from "./types/videoApi";

export const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

class API {
  private imageInstance: AxiosInstance;
  private videoInstance: AxiosInstance;

  constructor() {
    this.imageInstance = axios.create({
      baseURL: "https://pixabay.com/api/",
      params: {
        key: API_KEY,
        lang: "ko",
      },
    });

    this.videoInstance = axios.create({
      baseURL: "https://pixabay.com/api/videos/",
      params: {
        key: API_KEY,
        lang: "ko",
      },
    });
  }

  async getImages(params: ImagesParams): Promise<ImagesResponse> {
    const res = await this.imageInstance.get("", { params });
    return res.data;
  }

  async getVideos(params: VideosParams): Promise<VideosResponse> {
    const res = await this.videoInstance.get("", { params });
    return res.data;
  }
}

const api = new API();
export default api;
