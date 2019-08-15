/*
* promise.all 实现
* */
Promise.all = (list) => {
  return new Promise((resolve, reject) => {
      let result = [], count = 0;
      list.forEach((item, index) => {
          item.then((res) => {
              result[index] = res;
              if (++count === list.length) {
                  resolve(result);
              }
          }, err => reject(err))
      })
  })
};
