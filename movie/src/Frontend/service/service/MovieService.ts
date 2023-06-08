
import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { MovieType } from "./MoviesProp";



const MovieService = (api: AxiosInstance = defaultAxiosInstance) => ({

    getLimitedMovieById: async () => {
        const res = await api.get(`/movies?_limit=9`);
        return res["data"];
    },

    getAllMovie: async () => {
        const res = await api.get(`/movies`);
        return res["data"];
    },

  getMovieById: async (id: string) => {
    const res = await api.get(`/movies/${id}`);
    return res["data"];
},

    createMovie: async (movie : MovieType) => {
      const res = await defaultAxiosInstance.post("/movies", movie);
      return res["data"];
    },
    removeMovie: async (id: string) => {
      const res = await api.delete(`/movies/${id}`)
      return res["data"];
    },
    
    updateMovie:async (movieId : number, movie : MovieType) => {
      const res = await api.put(`/movies/${movieId}`, movie);
      return res["data"];
}
});

export default MovieService;