function createTitle(idea) {
  return "The " + idea;
}

function buildMainCharacter(nameIdea, ageIdea, pronounsIdea) {
  return {
    name: nameIdea,
    age: ageIdea,
    pronouns: pronounsIdea
  }
}

function saveReview(review, reviewsArray) {
  if (!reviewsArray.includes(review)) {
    reviewsArray.push(review)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  };
}

const editBook = book => {
  book.pageCount = book.pageCount * 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}