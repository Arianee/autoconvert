function transformToString (value) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  } else if (typeof value === 'string') {
    JSON.parse(value);
    return value;
  } else {
    throw new Error('this value is not an object or cannot be parse to object');
  }
}

export function AutoConvertToStringifiedJSON (target, property, descriptor?):any {
  let val;
  return {
    set: function (value) {
      val = transformToString(value);
    },
    get: function () {
      return val;
    },
    enumerable: true,
    configurable: true
  };
}
