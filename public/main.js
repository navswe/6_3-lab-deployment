const btnYes = document.getElementById('Yes-btn')
const btnNo = document.getElementById('No-btn')

const yesClickHandler = () => alert('I like cookies too!')

const noClickHandler = () => alert('ohh... do you want chips instead?')


btnYes.addEventListener('click', yesClickHandler)
btnNo.addEventListener('click', noClickHandler)