//Get all possible choices from the document
const choices = document.querySelectorAll('.choice')

//Add an event listener to all possible choices
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        changePlayersChoice(choice)
    })
})

//Add function changePlayersChoice
const changePlayersChoice = (node) => {
    removeSelected(node) //Remove class selected from other div
    node.classList.add('selected') //Add the class selecetd to the div when clicked
}

const removeSelected = (node) => {
    choices.forEach(choice => {
        //Iterate from all choices and if it has the class selected, delete it
        if(choice !== node & Array.from(choice.classList).includes('selected')){
            choice.classList.remove('selected')
        }
    })
}