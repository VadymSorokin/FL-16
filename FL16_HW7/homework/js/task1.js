let money = parseFloat(prompt('put amount of money (min 1000)'));
const period = parseInt(prompt('enter term of deposit in years (min 1 year)'));
const interest = parseFloat(prompt('enter percent of interest (max 100%)'));
const deposit = money;

if (money < 1000 || period < 1 || interest > 100) {
	alert('Invalid input data');
} else {
	for (let i = 0; i < period; i++) {
		money += interest / 100 * money;
	}
	const profit = money - deposit;
	alert(`
		Initial amount: ${deposit}
		Number of years: ${period}
		Percentage of year: ${interest}
		
		Total profit: ${profit.toFixed(2)}
		Total amount: ${money.toFixed(2)}
		`
	)
}