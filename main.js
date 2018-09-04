var sentence = 'grumpy wizards make toxic brew for the evil queen and jack'

var characters = []

for (var i = 0; i < sentence.length; i++) {
  var character = {
    key: sentence[i]
  }
  characters.push(character)
}

function renderCharacter(character) {
  var $character = document.createElement('span')
  $character.textContent = character.key
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
