import { modifyToJSONMethod } from '../modifyToJSONMethod/modifyToJSONMethod';

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
      modifyToJSONMethod(this);
      this[KEY] = transformToString(value);
    },
    get: function () {
      modifyToJSONMethod(this);
      return this[KEY];
    },
    enumerable: true,
    configurable: true
  };
}
