import { modifyToJSONMethod } from '../modifyToJSONMethod/modifyToJSONMethod';

export const AutoConvertToInteger = () => (target, property, descriptor?:TypedPropertyDescriptor<any>):any => {
  const KEY = Symbol('key');
  return {
    set: function (value) {
      modifyToJSONMethod(this);
      if (isNaN(value)) {
        throw new Error('cannot set value as integer');
      } else {
        this[KEY] = parseInt(value, 10);
      }
    },
    get: function () {
      modifyToJSONMethod(this);
      return this[KEY];
    },
    enumerable: false,
    configurable: true
  };
};
