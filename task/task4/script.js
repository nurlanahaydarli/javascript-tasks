let new_arr = []
function sorting_array(arr, movingElement){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] ===movingElement){
            new_arr.push(arr[i])
        }else{
            new_arr.unshift(arr[i])
        }
    }
    return new_arr
}

sorting_array([2, 1, 2, 2, 2, 3, 4, 2],2)


console.log(new_arr)


// buble sort

arr_bubble = [6,4,7,1,3,0,9,2];
let change_num;
function bubbleSortFunct(arr_bubble) {
    for (let i = 0; i < arr_bubble.length; i++) {
        for (let j = 0; j < arr_bubble.length - 1 - i; j++) {
            if (arr_bubble[j] > arr_bubble[j+1]) {
                change_num = arr_bubble[j];
                arr_bubble[j]= arr_bubble[j+1];
                arr_bubble[j+1]= change_num;
            }
        }
    }
    return arr_bubble;
}
let result = bubbleSortFunct(arr_bubble)
console.log(result, 'bubble sort')

// selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (lowest !== i) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([3, 5, 1, 2]),'selection sort')


// quick sort

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort([6,4,7,1,3,0,9,2]),'quick sort')