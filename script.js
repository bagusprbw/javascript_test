var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];
var odd = [];
var i = 0;

	for(i; i <number.length; i++){
		if (number[i] % 2 == 0) {
			even.push(number[i]);
		}else{
			odd.push(number[i]);
		}
	}
		console.log(`[${odd}], [${even}]`);
		