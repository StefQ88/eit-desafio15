
import axios from "axios"


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})


export const getMovies = async (searchTerm) => {
  const resp = await axiosInstance.get("/", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      s: searchTerm,
    }
  })

  if (resp.data.Response === "True") {
    return resp.data.Search
  } else {
    throw new Error(resp.data.Error);

  }

}


export const getMovieById = async (id) => {
  const resp = await axiosInstance.get("/", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      i: id,
    }
  })

  if (resp.data.Response === "True") {
    return resp.data
  } else {
    throw new Error(resp.data.Error)
  }
}





