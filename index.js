const sabresButton = document.querySelector('button.sabres')
const billsButton = document.querySelector('button.bills')

billsButton.addEventListener('click', (e) => {
	themeToggle("bills")
})

sabresButton.addEventListener('click', (e) => {
	themeToggle("sabres")
})

const themeToggle = (team) => {
	const t = team
	if (t === 'sabres') {
		sabresTheme()
	} else if (t === 'bills') {
		billsTheme()
	}
}

const svg = document.querySelector('svg')
const container = document.querySelector('.container')

const billsTheme = () => {
	svg.classList.add('bills')
	svg.classList.remove('sabres')
	
	container.classList.add('bills')
	container.classList.remove('sabres')
	
	billsButton.classList.add('hide')
	billsButton.classList.remove('show')
	
	sabresButton.classList.add('show')
	sabresButton.classList.remove('hide')
}

const sabresTheme = () => {
	svg.classList.add('sabres')
	svg.classList.remove('bills')
	
	container.classList.add('sabres')
	container.classList.remove('bills')
	
	billsButton.classList.add('show')
	billsButton.classList.remove('hide')
	
	sabresButton.classList.add('hide')
	sabresButton.classList.remove('show')
}