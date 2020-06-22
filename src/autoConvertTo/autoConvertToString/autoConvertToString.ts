function transformToString (value) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  } else {
    return value.toString();
  }
}

export function AutoConvertoString (target, property, descriptor?):any {
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
