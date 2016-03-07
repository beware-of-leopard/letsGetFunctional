// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

var highestNum = numbers.reduce(function(high, current){
	if (high < current){
		high = current;
	}
	return high;
});



// ---------------------------
// 2. Find longest string
// ---------------------------
var longestWord = strings.reduce(function(currentLong, currentWord){
	if (currentWord.length > currentLong.length){
		return currentWord
	}
	return currentLong;
});


// ---------------------------
// 3. Find even numbers
// ---------------------------

function findEvenNumbers(arrayOfNums){
	var evenNums = arrayOfNums.filter(function(num){
		return num%2 === 0;
	});
}

findEvenNumbers(numbers);

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function findOddNumbers(arrayOfNums){
	var oddNums = arrayOfNums.filter(function(num){
		return num%2 !== 0;
	});
}

findOddNumbers(numbers);


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function stringWithinString(arrayOfStrings){
	var filteredStrings = arrayOfStrings.filter(function(string){
			return string.includes('is');
	});
}

stringWithinString(strings);


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function joinTwoArrays(a, b){
	var joinedArray = a.reduce(function(growingArray, itemA){
			growingArray.push(itemA);
			return growingArray;
		}, b)

}

joinTwoArrays(strings, numbers);


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------


function alphaInstructors (arr){
var jsInstructors = arr.filter(function(instructor){
	return instructor['teaches'] === 'JavaScript';
	}).map(function(instructor){
		return instructor.firstname;
	})

return jsInstructors.sort();

};

alphaInstructors(instructors);
