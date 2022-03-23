const API_KEY = 'cc5a9d7cf4bac59dc6eb63d3cba779b3';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&lenguage=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with-networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with-networks=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with-networks=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with-networks=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with-networks=99`,
};

export default requests;