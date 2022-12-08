/*
 * @Author: niupengzhi
 * @Date: 2022-11-09 10:14:18
 * @LastEditTime: 2022-11-15 18:03:26
 * @Description: 
 */
// 有序数组 从中间值向两边查找

function findMid(arr, target, start = 0, end = arr.length - 1) {
    if (target > arr[end] || target < arr[start]) {
        return -1
    }
    let i = start, j = end
    const mid = Math.floor((start + end) / 2)
    if (start > end) {
        return -1
    }
    if (target === arr[mid]) {
        return mid
    } else if (target < arr[mid]) {
        // return findMid(arr, target, start, mid - 1)
        j = mid - 1
    } else if (target > arr[mid]) {
        // return findMid(arr, target, mid + 1, end)
        i = mid + 1
    }
    return findMid(arr, target, i, j)
}

// const value = findMid([1, 2, 3, 4, 5, 6, 7, 8], 6)
// console.log(value)

const obj = {}
obj.__proto__.name = 'dsads'
for (i in obj) {
    console.log(i)
}
for (i of obj) {
    console.log(i)
}