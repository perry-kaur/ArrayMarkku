function logArray(arr) {
for (let i = 0; i < arr.length; i++)
  console.log(arr[i]);
}
let numbers = [1, 3, 5, 7, 9];
//logArray(numbers);
let cars = ["BMW", "Fiat", "Audi", "Mercedes"];
//logArray(cars);

function cloneArray(myArray) {
  var clone = myArray.slice(0);
  return clone;
}
var clonedArr = cloneArray(cars);
//logArray(clonedArr);

var clonedNum = cloneArray(numbers);
//logArray(clonedNum);

function firstElement(arr) {
  let first = arr[0];
  return first;
}
var firstEle = firstElement(numbers);
//console.log(firstEle);
firstEle = firstElement(cars);
//console.log(firstEle);

function lastElement(array) {
  let last = array[array.length - 1];
  return last;
}
var lastEle = lastElement(numbers);
//console.log(lastEle);

function nFirstElements(array, n) {
  var firstElements = [];
  if (n <= 0 || n == undefined) {
    return firstElements;
  }
  for (let i = 0; i < n; i++) {
    firstElements.push(array[i]);
  }
  return firstElements;
}
var returnedArray = nFirstElements(numbers, 3);
//logArray(returnedArray);

function nLastElements(array, n) {
  var lastElements = [];
  if (n > array.length || n == 0 || n == undefined) {
    return lastElements;
  }
  for (let i = array.length - n; i < array.length; i++) {
    lastElements.push(array[i]);
  }
  return lastElements;
}

var returnedLastEle = nLastElements(numbers, 1);
//logArray(returnedLastEle);

function toStringWithSeparator(array, separator) {
  var toStrings = "";
  for (let i = 0; i < array.length; i++) {
    toStrings += array[i];
    if (i != array.length - 1) {
      toStrings += separator;
    }
  }
  return toStrings;
}
var result = toStringWithSeparator(cars, "+");
//console.log(result);

function sumSquaresOfVector(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    var num = array[i];
    var square = num * num;
    sum += square;
  }
  return sum;
}
//result = sumSquaresOfVector(numbers);
//console.log(result);

function averageOfVector(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    var num = array[i];
    sum += num;
  }
  return sum / array.length;
}
//result = averageOfVector(numbers);
//console.log(result);

function toUl(array) {
  var ulist = "<ul>";
  for (i = 0; i < array.length; i++) {
    ulist += "<li>";
    ulist += array[i];
    ulist += "</li>";
  }
  ulist+= "</ul>";
  console.log(ulist);
}
//toUl(cars);

function toUlDeep(array) {
  var ulist = "<ul>";

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      toUlDeep(array[i]);
    } else {
      ulist += "<li>";
      ulist += array[i];
      ulist += "</li>";
    }
  }
  ulist+= "</ul>";
  console.log(ulist);
}

var pets = new Array ( );
pets[0] = new Array ( "Sheba", 13, "cat" );
pets[1] = new Array ( "Jasper", 12, "dog" );
pets[2] = "Tommy";
toUlDeep(pets);

function sortStringArray (array) {
  return array.sort();
  }
//var sorted = sortStringArray(cars);
//logArray(sorted);

function sortNumericVector (array) {
  return array.sort();
  }
//var sorted = sortStringArray(numbers);
//logArray(sorted);

function sortObjectArray(array, type) {
return array.sort(function(a, b) {
  if(type=="libraryID"){
      return parseInt(a.libraryID) - parseInt(b.libraryID);
  } else if (type == "author") {
    return a.author - b.author;
  } else {
    return a.title - b.title;
  }

});
}
var json = "[{\"author\": \"Bill Gates\",\"title\": \"The Road Ahead\",\"libraryID\": 1254},{\"author\": \"Steve Jobs\",\"title\": \"Walter Isaacson\",\"libraryID\": 4264},{\"author\": \"Suzanne Collins\",\"title\": \"Mockingjay: The Final Book of The Hunger Games\",\"libraryID\": 3245}]";
var obj = JSON.parse(json);
var sorted = sortObjectArray(obj, "title");
//logArray(sorted);
