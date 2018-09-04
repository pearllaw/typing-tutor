var sentence = 'grumpy wizards make toxic brew for the evil queen and jack'

var appState = {
    characters: [],
    currentCharacterIndex: 0
}

for (var i = 0; i < sentence.length; i++) {
  var character = {
    key: sentence[i]
  }
  appState.characters.push(character)
}

function renderCharacter(character, index) {
  var $character = document.createElement('span')
  $character.textContent = character.key
  if (index === appState.currentCharacterIndex) {
    $character.classList.add('highlighted')
  }
  return $character
}


function renderAllCharacters(allCharacters) {
  var $characters = document.createElement('div')

  for (var i = 0; i < allCharacters.length; i++) {
    var $allCharacters = allCharacters[i]
    $characters.appendChild(renderCharacter($allCharacters, i))
  }
  document.body.appendChild($characters)
}

console.log(renderAllCharacters(appState.characters))
