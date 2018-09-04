var sentence = 'grumpy wizards make toxic brew for the evil queen and jack'

var characters = []

var appState = {
    characters: [],
    currentCharacter: 0,
    failures: 0,
}

for (var i = 0; i < sentence.length; i++) {
  var character = {
    key: sentence[i]
  }
  characters.push(character)
}

function renderCharacter(character) {
  var $character = document.createElement('span')
  $character.textContent = character.key
  if ($character[i] === appState.currentCharacter) {
    $character.classList.add('highlighted')
  }
  return $character
}


function renderAllCharacters(allCharacters) {
  var $characters = document.createElement('div')

  for (var i = 0; i < allCharacters.length; i++) {
    var $allCharacters = allCharacters[i]
    $characters.appendChild(renderCharacter($allCharacters))
  }
  document.body.appendChild($characters)
}

console.log(renderAllCharacters(characters))
