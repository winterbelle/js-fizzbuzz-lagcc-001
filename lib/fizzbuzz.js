'use strict';

let fizzbuzz = function(num){
	if(num % 3 === 0 && num % 5 === 0){
		console.log(num + ' FizzBuzz');
		return 'FizzBuzz';
	} else if(num % 3 === 0){
		console.log(num + ' Fizz');
		return 'Fizz';
	} else if(num % 5 === 0){
		console.log(num + ' Buzz');
		return 'Buzz';
	} else {
		console.log(num);
		return num;
	}
	
};

module.exports = fizzbuzz; 