import { AutoConvertToInteger } from './autoConvertToInteger';

describe('INTEGER', () => {
  test('number should return number', () => {
    class MyClassInteger {
            @AutoConvertToInteger()
            shouldBeANInteger: any;
    }

    const d = new MyClassInteger();

    d.shouldBeANInteger = 11;

    expect(typeof d.shouldBeANInteger).toBe('number');
  });

  test('DEV should not share instance', () => {
    class MyClassInteger {
      @AutoConvertToInteger()
      shouldBeANInteger: any;
    }

    const d = new MyClassInteger();
    const b = new MyClassInteger();

    d.shouldBeANInteger = '11';
    b.shouldBeANInteger = '233';

    expect(d.shouldBeANInteger).toBe(11);
    expect(b.shouldBeANInteger).toBe(233);
  });

  test('should not modify object', () => {
    class MyClassInteger {
      @AutoConvertToInteger()
      shouldBeANInteger: any;
    }
    const obj = new MyClassInteger();

    const prototype = Object.getPrototypeOf(obj);
    const fromInstanceObj = Object.keys(obj);
    const fromInstance = Object.getOwnPropertyNames(obj);
    const fromPrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));

    const keys = [...fromInstanceObj, ...fromInstance, ...fromPrototype];

    expect(keys).toEqual(['constructor', 'shouldBeANInteger']);
  });
  test('string should return number', () => {
    class MyClassInteger {
            @AutoConvertToInteger()
            shouldBeANInteger: any;
    }

    const d = new MyClassInteger();
    d.shouldBeANInteger = '11';

    expect(typeof d.shouldBeANInteger).toBe('number');
  });
  test('unknow type should throw error', () => {
    class MyClassInteger {
            @AutoConvertToInteger()
            shouldBeANInteger: any;
    }

    const d = new MyClassInteger();
    let isError = false;
    try {
      d.shouldBeANInteger = {};
    } catch (e) {
      isError = true;
    }

    expect(isError).toBeTruthy();
  });
});
