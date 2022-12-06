var {
  checkoutBook
} = require('../src/library.js')

class Librarian {
  constructor(name, library) {
    this._name = name;
    this._library = library;
  }

  get name() {
    return this._name;
  }

  get library() {
    return this._library;
  }

  greetPatron(name, checkMorning) {
    if (checkMorning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook(bookName) {
    let values = Object.values(this.library.shelves);
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        if (values[i][j].title === bookName) {
          checkoutBook(this.library, bookName, values[i][j].genre);
          return `Yes, we have ${bookName}`;
        }
      }
    }
    return `Sorry, we do not have ${bookName}`;
  }
}

module.exports = Librarian;