const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
];
const shortMovies = [];
const mediumMovies = [];
const longMovies = [];
for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    shortMovies.push(movie.name);
  }
  if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie.name);
  }
  if (movie.durationInMinutes > 200) {
    longMovies.push(movie.name);
  }
}
console.log('Short Movies:', shortMovies);
console.log('Medium Movies:', mediumMovies);
console.log('Long Movies:', longMovies);
