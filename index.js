//Get all possible choices from the document
const choices = document.querySelectorAll('.choice')
const playButton = document.querySelector('#startRound')

//Add an event listener to all possible choices
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        changePlayersChoice(choice)
    })
})

playButton.addEventListener('click', () => {
    getAiChoice()
})

//Add function changePlayersChoice
const changePlayersChoice = (node) => {
     //Remove class selected from other div
    removeSelected(node)
    //Add the class selecetd to the div when clicked
    node.classList.add('selected')
    //Get the player selection 
    const playerSelection = document.querySelector('#playerSelected') 
     //Adjust the attributes of the player selection
    playerSelection.setAttribute('style', 'width:150px; height:150px; object-fit:contain')
    //Change the src from the player selection to the clicked choice
    playerSelection.setAttribute('src', node.firstChild.getAttribute('src')) 
}

const removeSelected = (node) => {
    choices.forEach(choice => {
        //Iterate from all choices and if it has the class selected, delete it
        if(choice !== node & Array.from(choice.classList).includes('selected')){
            choice.classList.remove('selected')
        }
    })
}