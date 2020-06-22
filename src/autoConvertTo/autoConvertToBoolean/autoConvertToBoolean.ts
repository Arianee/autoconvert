export const AutoConvertToBoolean = () => (target, property, descriptor?): any => {
  const KEY = Symbol('key');

  return {
    set: function (value) {
      const isTrue = value.toString() === 'true';
      const isFalse = value.toString() === 'false';

      if (isTrue) {
        this[KEY] = true;
      } else if (isFalse) {
        this[KEY] = false;
      } else {
        throw new Error('cannot set value as boolean');
      }
    },
    get: function () {
      return this[KEY];
    },
    enumerable: true,
    configurable: true
  };
};
