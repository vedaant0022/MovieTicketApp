const apikey: string = '17325a8fa8efb5287c822ea7bffec8cd';
// Home screen API used
export const nowPlayingapi:string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const UpCominglistapi:string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularlistapi:string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };