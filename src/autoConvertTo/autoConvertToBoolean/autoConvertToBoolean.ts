export function AutoConvertToBoolean (target, property, descriptor?):any {
  let val;
  return {
    set: function (value) {
      const isTrue = value.toString() === 'true';
      const isFalse = value.toString() === 'false';

      if (isTrue) {
        val = true;
      } else if (isFalse) {
        val = false;
      } else {
        throw new Error('cannot set value as boolean');
      }
    },
    get: function () {
      return val;
    },
    enumerable: true,
    configurable: true
  };
}
