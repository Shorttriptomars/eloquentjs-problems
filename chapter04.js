/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, curr) {
  // Your code here
  var arr = [];
  if (curr == null) {
      curr = 1;
  }

  if (curr > 0) {
      for (var i = start; i<=end; i+= curr)
          arr.push(i);
  }
    else {
      for (i = start; i >= end; i+= curr)
          arr.push(i);
  }
    return arr;
}

function sum(arr) {
  // Your code here
   sums = 0;
    for(var i= 0; i< arr.length; i++ )
       sums += arr[i];
    return sums;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var rev = [];
    for (var i= array.length-1; i>=0; i--)
        rev.push(array[i]);
    return rev;
}

function reverseArrayInPlace(array) {
  // Your code here
  for(i=0; i<Math.floor(array.length/2); i++){
    var arr = array[i];
    array[i]=array[array.length-1-i];
    array[array.length-1-i] = arr;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
  for ( var i = array.length-1; i>=0;i--)
    list = {value:array[i], rest: list};
  return list;
}

function listToArray(list) {
  // Your code here
  var array=[];
  for( var node =list; node; node=node.rest)
    array.push(node.value);
  return array;
  
}

function nth(list, position) {
  // Your code here
  if (!list)
    return undefined;
  else if (position == 0)
    return list.value;
  else
    return nth(list.rest, position - 1);

}

function prepend(element, list) {
  // Your code here
  return {value:element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(x, y) {
  // Your code here
   if(x===y)
    return true;
  else if (typeof x=="object" && x != null ||
           typeof y=="object" && y != null)
   	return false;


	var countPropX, countPropY = 0;

	for (var count in x)
 	 countPropX +=1;

    for (count in y)
 	 countPropY += 1;

	if (!deepEqual (x[count], y[count]))
   	 return false;

return (countPropX == countPropY);
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
