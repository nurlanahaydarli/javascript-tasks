// 1 Müxtəlif tam ədədlərdən ibarət boş olmayan massivi və hədəf cəmini təmsil edən tam ədədi qəbul edən funksiya yazın. Əgər giriş massivindəki hər hansı iki ədədin cəmi hədəf cəminə bərabərdirsə, funksiya onları istənilən ardıcıllıqla massivdə qaytarmalıdır. Hədəf məbləğinə cavab verən iki ədəd yoxdursa, funksiya boş massiv qaytarmalıdır.


let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10


function findTargetSum(arr, targetSum) {
    let new_arr = new Set()
    for (const num of arr) {
        let complement = targetSum - num;
        if (new_arr.has(complement)) {
            return [complement, num]
        }
        new_arr.add(num)
    }
    return []
}

console.log(findTargetSum(array, targetSum), 'new_arr')


// 2.  Tam ədədlərin çeşidlənmiş massivini və hədəf tam ədədini
// qəbul edən funksiyanı yazın. Funksiya, hədəf tam ədədin
// massivdə olub-olmadığını müəyyən etmək üçün Binar Axtarış
// alqoritmindən istifadə etməli və əgər varsa, indeksini
// qaytarmalıdır, əks halda -1.

let arr = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
let target = 33
let left = 0
let right = arr.length - 1;

function findTargetNum(arr, target) {
    while (left <= right) {
        let midIndex = Math.floor((left + right) / 2);
        if (arr[midIndex] === target) {
            return midIndex
        }
        if (arr[midIndex] < target) {
            left = midIndex + 1
        } else {
            right = midIndex - 1
        }
    }
}

console.log(findTargetNum(arr, target))
