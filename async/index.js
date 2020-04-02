// AJAX - Async JavaScript + XML

const fetchUser = (userName, callback) =>{
    setTimeout(() => {
      console.log('[Fetching the user...]');
      const user = { userName: userName };

      callback(user);
    }, 2000)
}

const fetchMovies = (userName, callback) => {
    setTimeout(() => {
      console.log('[Fetching the movies...]');
      const movies = ['movie1','movie2','movie3'];

      callback(movies);
    }, 3000)
}

const fetchMovieDetails = (movies, index, callback) => {
  setTimeout(() => {
      console.log('[Fetching the movie details...]');

      callback(movies[index]);
  }, 4000)
}

fetchUser('Victor', (user) => {
  fetchMovies(user.userName, (movies) => {
    fetchMovieDetails(movies, 1, (movieDetails) => {
      // CALLBACK HELL
    });
  });
});
