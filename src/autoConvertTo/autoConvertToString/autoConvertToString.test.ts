import { AutoConvertoString } from './autoConvertToString';
import { AutoConvertToBoolean } from '../..';

describe('string', () => {
  class MyClassString {
        @AutoConvertoString
        shouldBeAString: any;
  }

  let theClass;
  beforeEach(() => {
    theClass = new MyClassString();
  });

  test('object should be in string', () => {
    theClass.shouldBeAString = { a: 'an object' };

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  test('should be unique instance', () => {
    const d = new MyClassString();
    const c = new MyClassString();
    c.shouldBeAString = 'john';
    d.shouldBeAString = 'paul';

    expect(c.shouldBeAString).toBe('john');
    expect(d.shouldBeAString).toBe('paul');
  });

  test('should not modify object', () => {
    const obj = new MyClassString();

    const prototype = Object.getPrototypeOf(obj);
    const fromInstanceObj = Object.keys(obj);
    const fromInstance = Object.getOwnPropertyNames(obj);
    const fromPrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));

    const keys = [...fromInstanceObj, ...fromInstance, ...fromPrototype];

    expect(keys).toEqual(['constructor', 'shouldBeAString']);
  });
  test('string should be in string', () => {
    theClass.shouldBeAString = 'astring';

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  test('object with method should be in string', () => {
    theClass.shouldBeAString = {
      a: 'a string',
      b: () => {
      }
    };

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  test('number should be in string', () => {
    theClass.shouldBeAString = 22;

    expect(typeof theClass.shouldBeAString).toBe('string');
  });
});
