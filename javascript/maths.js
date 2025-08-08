let num = Math.random();
console.log("Random number: " + num.toFixed(2));
console.log(bubbleSort([5, 3, 8,98,66,5,4,3,56,432,556, 4, 2]));
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

    for (let i = 0; i < 11; i++)
        console.log(i)

}
 