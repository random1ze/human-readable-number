module.exports = function toReadable (number) {
	const preDozensArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const dozensArray = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let result = '';

	if (number > 99) {
		result = preDozensArray[Math.floor(number / 100)] + ' hundred';
		if (number % 100 !== 0 && number % 100 < 20) {
			result += ' ' + preDozensArray[number % 100];
		} else if (number % 100 !== 0) {
            result += " " + dozensArray[Math.floor((number % 100) / 10)];
            if ((number % 100) % 10 !== 0) {
                result += " " + preDozensArray[(number % 100) % 10];
            }
        }
	} else if (number > 19) {
		result += dozensArray[Math.floor(number % 100 / 10)];
		if (number % 100 % 10 !== 0) {
			result += ' ' + preDozensArray[number % 100 % 10];
		}
	} else
		result += preDozensArray[number];
	return result;
}
