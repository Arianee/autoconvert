import { modifyToJSONMethod } from '../modifyToJSONMethod/modifyToJSONMethod';

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

export const AutoConvertToStringifiedJSON = () => (target, property, descriptor?):any => {
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
};
