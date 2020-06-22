export const AutoConvertToInteger = () => (target, property, descriptor?:TypedPropertyDescriptor<any>):any => {
  const KEY = Symbol('key');
  return {
    set: function (value) {
      if (isNaN(value)) {
        throw new Error('cannot set value as integer');
      } else {
        this[KEY] = parseInt(value, 10);
      }
    },
    get: function () {
      return this[KEY];
    },
    enumerable: false,
    configurable: true
  };
};
