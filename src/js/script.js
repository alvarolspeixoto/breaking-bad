const selectedCharacterImg = document.querySelector('.big-sized-character')
selectedCharacterImg.addEventListener('click', () => {

    previousSize = document.querySelector('.selected-and-clicked')

    if(previousSize) {
        previousSize.className = 'big-sized-character'
    } else {
        selectedCharacterImg.classList.add('selected-and-clicked')
    }

})


const characterList = document.querySelectorAll('.character')

characterList.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        // Show that this person has been selected
        const previouslySelected = document.querySelector('.selected-from-list')

        if(previouslySelected) {
            previouslySelected.className = 'character'
        }
        character.classList.add('selected-from-list')

        // Changes character's name
        characterName = document.querySelector('#character-name')
        characterName.innerText = character.getAttribute('data-name')

        // Changes character's image
        characterId = character.id
        characterImg = document.querySelector('.big-sized-character')
        characterImg.src = `./src/images/${characterId}.png`

        // Makes sure the image will show up with the correct size
        let previousSize = document.querySelector('.selected-and-clicked')
        if(previousSize) {
            previousSize.className = 'big-sized-character'
        }

    })
})