function extractAllGetter (obj): any {
  const prototype = Object.getPrototypeOf(obj);
  const fromInstanceObj = Object.keys(obj);
  const fromInstance = Object.getOwnPropertyNames(obj);
  const fromPrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));

  const keys = [...fromInstanceObj, ...fromInstance, ...fromPrototype];

  const getters = keys
    .map(key => Object.getOwnPropertyDescriptor(prototype, key))
    .map((descriptor, index) => {
      if (descriptor && typeof descriptor.get === 'function') {
        return keys[index];
      } else {
        return undefined;
      }
    })
    .filter(d => d !== undefined);

  return getters.reduce((accumulator, currentValue) => {
    if (obj[currentValue] !== undefined) {
      accumulator[currentValue] = obj[currentValue];
    }
    return accumulator;
  }, {});
}

export const modifyToJSONMethod = (obj) => {
  if (!Object.prototype.hasOwnProperty.call(obj, 'toJSON')) {
    obj.toJSON = function () {
      const getters = extractAllGetter(obj);
      return {
        ...obj,
        ...getters
      };
    };
  }
};
