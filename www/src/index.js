import { getTemplate } from "./components/helpers/FetchFirebase";

const container = document.querySelector('#app')

// HEADER
const headerInfo = document.createElement('div')
headerInfo.className = 'headerInfo m-20 text-center h-full'

const title = document.createElement('h1')
title.innerText = 'Doki Template'
title.className = 'text-5xl text-indigo-400'
const text = document.createElement('p')
text.className = 'm-6 text-xl'
text.innerText = ' A starter template to build lightning fast websites static'


container.appendChild(headerInfo)
headerInfo.appendChild(title)
headerInfo.appendChild(text)

// CARD
const containerCards = document.createElement('div')
containerCards.className = 'container-cards grid grid-cols-3 text-center m-32'


getTemplate().then((res) => {
  console.log(res)
  const arrayTemplates = [];
  Object.keys(res).forEach((key) => {
      const template = res[key];
      template.id = key;
      arrayTemplates.push(template)
  })
  console.log(arrayTemplates)
  for (let i = 0; i < arrayTemplates.length; i++) {
    console.log(arrayTemplates[i].name)
    // card
    const card = document.createElement('div')
    // title
    const titleTemplate = document.createElement('h1')
    titleTemplate.innerText = arrayTemplates[i].name
    // description
    const description = document.createElement('p')
    description.innerText = arrayTemplates[i].description
    // author
    const author = document.createElement('p')
    author.innerText = arrayTemplates[i].owner
    author.className = 'absolute inset-x-0 bottom-0 mb-4'

    titleTemplate.className = 'text-xl'
    card.className = 'h-60 shadow-2xl bg-indigo-200 rounded mx-4 m-20 p-6 relative'

    container.appendChild(containerCards)
    containerCards.appendChild(card)
    card.appendChild(titleTemplate)
    card.appendChild(description)
    card.appendChild(author)

  }
})
