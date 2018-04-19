const fs = require('fs');

const compute = (dataStr) => {
	console.time('compute');

	let floor = new Number();
	let basementIndex = 0;

	for (let i = 0; i < dataStr.length; i++) {
		if(dataStr[i] === '('){
			floor++;
		} else if (dataStr[i] === ')') {
			floor--;
		} else {
			console.log('invalid character');
		}

		if (basementIndex === 0 && floor < 0) {
			basementIndex = i+1;
		}
	}

	console.timeEnd('compute');

	return [floor, basementIndex];
}

fs.readFile('./input.txt', (err, data) => {
  if (err) {
  	console.log(err);
  	return;
  }

  console.log(compute(data.toString().trim()));
});