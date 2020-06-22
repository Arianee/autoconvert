export function AutoConvertToInteger (target, property, descriptor?:TypedPropertyDescriptor<any>):any {
  let val;
  return {
    set: function (value) {
      if (isNaN(value)) {
        throw new Error('cannot set value as integer');
      } else {
        val = parseInt(value, 10);
      }
    },
    get: function () {
      return val;
    },
    enumerable: true,
    configurable: true
  };
}
