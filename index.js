//Get all possible choices from the document
const choices = document.querySelectorAll('.choice')
const playButton = document.querySelector('#startRound')
const aiChoices = ['scissors', 'rock', 'paper']
let machineWins = 0
let playersWins = 0

//Scnearios to be used to get the winner
const scenarios = {'paper':{'rock':'WIN', 'paper':'DRAW', 'scissors':'LOSE'}, 
'rock':{'rock':'DRAW', 'paper':'LOSE', 'scissors':'WIN'}, 
'scissors':{'rock':'LOSE', 'paper':'WIN', 'scissors':'DRAW'}}


//Add an event listener to all possible choices
choices.forEach(choice => {
    choice.addEventListener('click', async () => {
        getPlayersChoice(choice)
        const aiChoice = getAiChoice()
        //Wait for a secons and move on
        await sleep(1000)
        changeAiSelection(aiChoice)
        //Get the message
        const message = getMessage(aiChoice, document.querySelector('.selected').firstChild.id)
        //Display who won after the tiemout and reset the selection
        await sleep(500)
        //Wait half a second and display he message
        displayMessage(message)
        changeWins()
        resetSelection()
    })
})

//Add function changePlayersChoice
const getPlayersChoice = (node) => {
    //Add the class selecetd to the div when clicked
    node.classList.add('selected')
    //Get the player selection 
    const playerSelection = document.querySelector('#playerSelected') 
     //Adjust the attributes of the player selection
    playerSelection.setAttribute('style', 'width:150px; height:150px; object-fit:contain')
    //Change the src from the player selection to the clicked choice
    playerSelection.setAttribute('src', node.firstChild.getAttribute('src')) 
}

const removeSelected = () => {
    choices.forEach(choice => {
        //Iterate from all choices and if it has the class selected, delete it
        if(Array.from(choice.classList).includes('selected')){
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

//Get the winner of the games
const getMessage = (machine, player) => {
    return scenarios[player][machine]
}

const resetSelection = () => {
    //Select the correct selection divs and remove the selected class
    const machineSelection = document.querySelector('#machineSelected')
    const playerSelection = document.querySelector('#playerSelected')
    removeSelected(null)
    //Set atributes to default
    machineSelection.setAttribute('style', 'width:null; height:null; object-fit:null')
    playerSelection.setAttribute('style', 'width:null; height:null; object-fit:null')
    machineSelection.setAttribute('src', '')
    playerSelection.setAttribute('src', '')
}

//Display the correct message according to the msg
const displayMessage = (msg) => {
    switch(msg){
        case 'WIN':
            playersWins+=1
            return alert('You won the round');
        case 'LOSE':
            machineWins+=1
            return alert('The machine got the win');
        default:
            return alert('Thats a draw');
    }
}

const changeWins = () => {
    document.querySelector('#nMachineWins').textContent = machineWins
    document.querySelector('#nPlayerWins').textContent = playersWins
}

// Sleep function, credits to https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }