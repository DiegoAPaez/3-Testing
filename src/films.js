const movies = require('../src/data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map((movie) => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let count = 0;
  let totalScore = 0;
  array
    .filter((movies) => movies.director === director)
    .forEach((movie) => {
      count++;
      totalScore += movie.score;
    });
  return totalScore / count;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const movieTitles = array
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b));
  if (movieTitles.length > 20) {
    return movieTitles.slice(0, 20);
  }
  return movieTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const yearSorted = [...array].sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  );
  return yearSorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let totalScore = 0;
  let count = 0;

  array.forEach((movie) => {
    if (movie.genre.includes(genre) && typeof movie.score === 'number') {
      totalScore += movie.score;
      count++;
    }
  });

  return count > 0 ? parseFloat((totalScore / count).toFixed(2)) : 0;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
