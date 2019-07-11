/*
* 冻结对象自身的任何属性都不能被任何方式修改
* freeze() 方法返回的是和传入的参数相同的对象
* */
const obj = {
    name: 'bar',
    say: {
        word: 'hello'
    }
};

Object.freeze(obj);
obj.name = 2;  // 正常模式下不会有响应，严格模式下会报错
console.log(obj.name); // 'bar'

// 如果被冻结的一个属性值是对象，那么该对象是可以被修改的
obj.say.word = 'world';
console.log(obj.say.word); // world

// 除了对象本身被冻结，它的属性也应该被冻结
var constanize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
          constanize(obj[key]);
      }
  });
};

constanize(obj);
obj.say.word = 'HELLO';
console.log(obj);  // world
