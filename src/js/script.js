const characterList = document.querySelectorAll(".character");

characterList.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    // Changes the style of the big-sized image
    bigSizedImg = document.querySelector(".default-img");
    if (bigSizedImg) bigSizedImg.className = "big-sized-character";

    // Shows that this character has been selected
    const previouslySelected = document.querySelector(".selected-from-list");

    if (previouslySelected) {
      previouslySelected.className = "character";
    }
    character.classList.add("selected-from-list");

    // Changes character's name
    characterName = document.querySelector("#character-name");
    characterName.innerText = character.getAttribute("data-name");

    // Changes character's image
    characterId = character.id;
    characterImg = document.querySelector(".big-sized-character");
    characterImg.src = `./src/images/${characterId}.png`;

    // Makes sure the image will show up with the correct size
    let previousSize = document.querySelector(".selected-and-clicked");
    if (previousSize) {
      previousSize.className = "big-sized-character";
    }

    // Changes characters' description
    characterDescription = document.querySelector("#character-description");
    characterDescription.innerText = character.getAttribute("data-description");

    // Sets default attribute to false
    selectedCharacterImg.setAttribute('default', 'false')

  });
});

// Changes image size when clicked
const selectedCharacterImg = document.querySelector("#default-img");
selectedCharacterImg.addEventListener("click", () => {

  if(selectedCharacterImg.getAttribute('default') == 'false'){
      previousSize = document.querySelector(".selected-and-clicked");
    
      if (previousSize && previousSize.className != "default-img") {
        previousSize.className = "big-sized-character";
      } else {
        selectedCharacterImg.classList.add("selected-and-clicked");
      }
  }

});
