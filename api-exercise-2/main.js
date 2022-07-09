const booksButton = document.querySelector('.books-button')
booksButton.style.margin = '0 0 8px 0'
const membersButton = document.querySelector('.members-button')
const contentContainer = document.querySelector('.content-container')

const getBooks = async () => {
  const apiData = await fetch('https://fakerapi.it/api/v1/books?_quantity=10')
  const booksObject = await apiData.json()
  const books = booksObject.data
  for (let book of books) {
    const title = book.title
    const author = book.author
    const image = book.image
    const description = book.description

    const bookInfo = document.createElement('div')
    bookInfo.className = 'single-book'
    bookInfo.innerHTML = 
      `<h3>${title}</h3>
      <h4>${author}</h4>
      <img src=${image} />
      <p>${description}</p>
    `
    contentContainer.append(bookInfo)
  }
}

booksButton.addEventListener('click', getBooks)