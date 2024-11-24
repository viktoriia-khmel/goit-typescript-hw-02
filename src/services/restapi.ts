import axios from "axios";
import { Response } from "../../src/components/App/App.types";



export const fetchImages = async (page: number = 1, query: string): Promise<Response> => {
  const { data } = await axios.get<Response>(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "ScXQbCA0rXnTGDcfyBGyY2tr7rJs2A3jNTw_bAH-8TE",
      query: query,
      page: page,
      per_page: 12,
    },
  });
  return data;
};
