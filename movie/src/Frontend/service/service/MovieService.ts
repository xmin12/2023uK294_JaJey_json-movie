
import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "../Api";




type addMovieRequest = {
    movie_name: string;
    release_date: string;
  };
  export type Movie = {
    id: string;
    movie_name: string;
    release_date: string;
  }
const MovieService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getMovieById: async (id: string) => {
    const response = await api.get<Movie>(`/movies/${id}`);
    return response.data;
  },
    getAllMovie: async () => {
        const data = await api.get<Movie[]>(`/movies`);
        return data['data'];
    },
    createMovie: async (params: addMovieRequest) => {
      const res = await defaultAxiosInstance.post("/movies", params);
      if (res && res.status === 200) {
        console.log("movie successfully created");
      }
    },
    removeMovie: async (id: string) => {
      const res = await api.delete(`/movies/${id}`)
      if (res && res.status === 200) {
        console.log("movie successfully created");
      }
    },
    
    updateMovie:async (params: Movie) => {
      const res = await defaultAxiosInstance.put(`/movies/${params.id}`, params);
      if(res && res.status === 200) {
        console.log("movie successfully updated");
    }
    
}});

export default MovieService;