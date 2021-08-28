//Get all possible choices from the document
const choices = document.querySelectorAll('.choice')
const playButton = document.querySelector('#startRound')
const aiChoices = ['scissors', 'rock', 'paper']



//Add an event listener to all possible choices
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        changePlayersChoice(choice)
    })
})

//Add an event listener to play button
playButton.addEventListener('click', () => {
    const aiChoice = getAiChoice()
    changeAiSelection(aiChoice)
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

//Randonly choose between rock paper or scissors
const getAiChoice = () => {
    return aiChoices[Math.floor(Math.random() * 3)]
}

const changeAiSelection = (choice) => {
    //Get machine selection div
    const machineSelection = document.querySelector('#machineSelected')
    //Change machine selection image style 
    machineSelection.setAttribute('style', 'width:150px; height:150px; object-fit:contain')
    //Load image selected randonly
    machineSelection.setAttribute('src', `./images/${choice}.png`)
}