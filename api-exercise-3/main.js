const button = document.querySelector('.get-joke-button')
const container = document.querySelector('.joke-container')
const loveLabel = document.querySelector('.love-count')
const hateLabel = document.querySelector('.hate-count')
const likeButton = document.createElement('button')
const hateButton = document.createElement('button')
likeButton.style.marginLeft = '8px'
hateButton.style.marginLeft = '8px'

let loveCount = 0
let hateCount = 0

const getJoke = async () => {
  const apiData = await fetch('https://icanhazdadjoke.com/', { headers: {
    'Accept': 'application/json'
  }})
  const jokeObject = await apiData.json()
  const joke = jokeObject.joke
  likeButton.innerHTML = "HAHA"
  hateButton.innerHTML = "Not Funny"

  container.innerText = joke
  container.append(likeButton)
  container.append(hateButton)
}

const addReaction = (reaction) => {
  (reaction === 'love') ? loveCount++ : hateCount++
  loveLabel.innerText = loveCount
  hateLabel.innerText = hateCount
  container.innerText = ''
}

button.addEventListener('click', getJoke)
likeButton.addEventListener('click', () => addReaction('love'))
hateButton.addEventListener('click', () => addReaction('hate'))

