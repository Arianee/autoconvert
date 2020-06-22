function transformToString (value) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  } else {
    return value.toString();
  }
}

export function AutoConvertoString (target, property, descriptor?):any {
  const KEY = Symbol('key');

  return {
    set: function (value) {
      this[KEY] = transformToString(value);
    },
    get: function () {
      return this[KEY];
    },
    enumerable: true,
    configurable: true
  };
}
