var sentence = 'grumpy wizards make toxic brew for the evil queen and jack'
var word = sentence.split(' ') //split into array of words ['grumpy', 'wizards'..]
var character = word.splice(' ') //split words into single characters
var characterArray = []

for (var i = 0; i < character.length; i++) {
  var objects = {}
  var key = "letter"
  objects[key] = character[i] // objects for each character
  characterArray.push(objects) // array of objects for each character
}

function singleCharacter(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i]
    }
  }
  return null
}
