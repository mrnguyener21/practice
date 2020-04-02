const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('[Fetching the user...]');
      const user = { userName: userName };
  
      // resolve(user);
      reject('no users found');
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

const displayData = async () => {
  try {
    const user = await fetchUser('Victor');
    const movies = await fetchMovies(user.userName);
    const movieDetails = await fetchMovieDetails(movies, 1);
  
    console.log(movieDetails);
  } catch (error) {
    console.log(error);
  }
}

displayData();