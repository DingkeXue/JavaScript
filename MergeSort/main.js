/*
* 归并排序采用的是分治的思想，首先将一个数组反复二分为两个小数组，直到每个数组只有一个元素；然后将
* 最小数组两两按大小顺序合并，直到并为原来数组大小。
* 时间复杂度为：O(nlogn)
* */
// 递归实现归并排序
function mergeSort(arr, first, last, temp) {
    if (first < last) {
        let mid = Math.floor((first + last) / 2);
        mergeSort(arr, first, mid, temp); // 左边数组
        mergeSort(arr, mid+1, last, temp); // 右边数组
        arr = mergeArray(arr, first, mid, last, temp);
    }
    return arr;
}

function mergeArray(arr, first, mid, last, temp) {
    let f = first; let m = mid; let i = mid + 1; let l = last; let k = 0;
    while (f <= m && i <= l) {
        if (arr[f] < arr[i]) {
            temp[k++] = arr[f++];
        } else {
            temp[k++] = arr[i++];
        }
    }
    while (f <= m) {
        temp[k++] = arr[f++];
    }
    while (i <= l) {
        temp[k++] = arr[i++];
    }
    for (let j = 0; j < k; j++) {
        arr[first+j] = temp[j];
    }
    return arr;
}

let arr = [1, 23, 45, 5, 6];
let temp = [];
let sort = mergeSort(arr, 0, arr.length - 1, temp);
console.log(sort);
