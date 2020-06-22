import { AutoConvertToBoolean } from './autoConvertToBoolean';
import { AutoConvertToInteger } from '../..';
describe('Boolean', () => {
  test('boolean true string should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean()
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = 'true';

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(true);
  });

  test('boolean false string should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean()
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = 'false';

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(false);
  });
  test('boolean true should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean()
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = true;

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(true);
  });
  test('boolean false should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean()
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = false;

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(false);
  });

  test('should be unique instance', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean()
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    const c = new MyClassBoolean();
    c.shouldBeABoolean = true;
    d.shouldBeABoolean = false;

    expect(c.shouldBeABoolean).toBe(true);
    expect(d.shouldBeABoolean).toBe(false);
  });

  test('should not modify object', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean()
      shouldBeABoolean: any;
    }
    const obj = new MyClassBoolean();

    const prototype = Object.getPrototypeOf(obj);
    const fromInstanceObj = Object.keys(obj);
    const fromInstance = Object.getOwnPropertyNames(obj);
    const fromPrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));

    const keys = [...fromInstanceObj, ...fromInstance, ...fromPrototype];

    expect(keys).toEqual(['constructor', 'shouldBeABoolean']);
  });

  test('not boolean-able should thow', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean()
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();

    let isError = false;
    try {
      d.shouldBeABoolean = {};
    } catch (e) {
      isError = true;
    }

    expect(isError).toBeTruthy();
  });
});
