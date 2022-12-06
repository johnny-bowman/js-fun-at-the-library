const createLibrary = (libraryName) => {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

const addBook = (library, book) => {
  library.shelves[book.genre].push(book);
}

const checkoutBook = (library, bookTitle, bookGenre) => {
  for (let i = 0; i < library.shelves[bookGenre].length; i++) {
    if (library.shelves[bookGenre][i].title === bookTitle) {
      library.shelves[bookGenre].splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};