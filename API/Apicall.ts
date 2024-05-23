const apikey: string = '17325a8fa8efb5287c822ea7bffec8cd';
// Home screen API used
export const nowPlayingapi:string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const UpCominglistapi:string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularlistapi:string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

// details
export const movieDetail = (id: number) =>{
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
};
// Caste
export const casteDetail = (id: number) =>{
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};
// search

export const searchMovies= (keyword: string) => {
  return`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};













export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };