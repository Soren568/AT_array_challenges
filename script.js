

//COMPLETED 1. Always Hungry
function alwaysHungry(arr) {
    var count = 0
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy");
            count++
        }
    }
    if(count == 0){
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log a"yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// COMPLETED 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr += arr[i];
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// COMPLETED 3. Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    var avg = sum/arr.length

    // count how many values are greated than the average
    var count = 0
    for( var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// COMPLETED 4. Array Reverse
function reverse(arr) {
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=1; i<n-1; i++){
        temp = fibArr[i] + fibArr[i - 1];
        fibArr.push(temp)
    }
    
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
