/*
* reduce 为数组中的每一个元素一次执行回调函数，不包括数组中
* 被删除或者从未被赋值的元素，接受四个参数：累计器、当前值、当前索引、源数组
* arr.reduce(callback, [initialValue]);
* */
let arr = [1, 2, 3, 4];
// 因为没有给初始值，所以累计器将会使用数组的第一个元素最为初始值，current 和 index 从第二个元素开始
let arr2 = arr.reduce((accumulator, current, index) => accumulator + current);
console.log(arr2); // 10

// 如果数组中有未定义的值，则直接跳过
arr = [1, 2, , 4];
console.log(arr.reduce((acc, cur)=> acc + cur)); // 7

//给定一个初始值
let arr3 = [1, 2, 3, 4];
let arr4 = arr3.reduce((acc, current) => {
    return acc +　current;
}, 10);
console.log(arr4); //  20

// reduce + concat 实现 flat 
let arr5 = [1, [3], [4, 5]];
function flat(arr) {
	return arr.reduce((acc, cur) => acc.concat(cur), [])
}
console.log(flat(arr5));

// 计算元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
function getCount(arr) {
	return arr.reduce((acc, cur) => {
		if(cur in acc) {
			acc[cur]++;
		} else {
			acc[cur] = 1;
		}
		return acc;
	}, {})
}
console.log(getCount(names));

// 实现 new Set() 函数
let arr6 = [1,2,1,2,3,5,4,5,3,4,4,4,4];
//console.log(new Set(arr6))
function mySet(arr) {
	return arr.sort().reduce((acc, cur) => {
		if(acc.length === 0 || acc[acc.length-1] !== cur) {
			acc.push(cur);
		}
		return acc;
	}, [])
}
console.log(mySet(arr6));