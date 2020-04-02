// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ user: 'Victor'});
//   }, 2000)
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('[Fetching the user...]');
      const user = { userName: userName };
  
      resolve(user);
    }, 2000)
  })
}

const fetchMovies = (userName) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
          console.log('[Fetching the movies...]');
          const movies = ['movie1','movie2','movie3'];
          resolve(movies);
        }, 3000)
    })
}

const fetchMovieDetails = (movies, index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('[Fetching the movie details...]');
    
        resolve(movies[index]);
    }, 4000);
  })
}

fetchUser('victor')
    .then((user)=> fetchMovies(user.userName))
    .then((movies)=> fetchMovieDetails(movies, 1))
    .then((movieDetails) => console.log(movieDetails);

