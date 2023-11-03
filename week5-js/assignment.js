const object = {
  a: "a",
  number: {
    one: 1,
    two: 2,
  },
  arr: [1,2,[3,4]],
}


function deepCopy(object) {
  // 원리1) null or 원시타입은 깊은 복사가 필요하지 않으므로, 그대로 반환시킨다. 
  if(object === null || typeof object !== 'object') {
    return object; 
  }

  let copiedObject;
  const type = Object.prototype.toString.call(object)

  switch (type) {
    case '[object Map]':
      copiedObject = new Map();
      object.forEach((value, key) => {
        copiedObject.set(key, deepCopy(value))
      })
      break;
    case '[object Set]':
      copiedObject = new Set();
      object.forEach((value) => {
        copiedObject.add(deepCopy(value))
      })
      break;
    case '[object Date]':
      copiedObject = new Date(object.getTime());
      break;
    case '[object RegExp]':
      copiedObject = new RegExp();
      break;
    case '[object Array]':
      copiedObject = [];
      for(let i = 0; i < object.length; i++) {
        copiedObject[i] = deepCopy(object[i])
      }
      break;
    case '[object Object]':
      copiedObject = {};
      // ...
      break;

    default:
  }
  return copiedObject;
}
