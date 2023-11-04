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

// 하드코딩을 지양하자. 
// 1. 휴먼에러
// 2. 변경사항에 따른 유지보수의 어려움

// 1. 공식문서를 먼저 확인하자.
// 2. 공식문서에서 어떤 정의를, 어떤 역할을, 어떤 기능을 수행하는지 확인할 수 있다.
// 3. lodash 라는 라이브러리가 있는데, 여기 소스에서 cloneDeep 함수를 참고할 수 있으니까 확인해봐라.
