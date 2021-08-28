const choices = document.querySelectorAll('.choice')

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        alert('You clicked in a option')
    })
})