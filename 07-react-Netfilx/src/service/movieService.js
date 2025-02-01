const key = import.meta.env.VITE_TMDB_KEY;
const endpoints ={
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    action: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=3`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};


export default endpoints;