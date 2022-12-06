const shelfBook = (book, shelf) => {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

const unshelfBook = (title, shelf) => {
  let index = shelf.findIndex(book => book.title === title);  
  shelf.splice(index, 1);
}

const listTitles = (shelf) => {
  let titleList = "";
  shelf.forEach(book => titleList += book.title + ", ")
  return titleList.slice(0, -2);
}

const searchShelf = (shelf, title) => {
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};