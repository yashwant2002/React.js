const key = import.meta.env.VITE_TMDB_KEY;
const endpoints ={
    popular: `https://api.themoviedb.org/3/discover/movie?api_key=766c96f18bcd82c38c7f611bbaaba77b`,
    topRated: `https://api.themoviedb.org/3/discover//movie/top_rated?api_key=${key}`,
    trending: `https://api.themoviedb.org/3/discover//movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `https://api.themoviedb.org/3/discover//search/movie?api_key=${key}&language=en-US&query=comedy&page=1& include_adult=false`,
    upcoming: `https://api.themoviedb.org/3/discover//movie/upcoming?api_key=${key}`,
};
export default endpoints;