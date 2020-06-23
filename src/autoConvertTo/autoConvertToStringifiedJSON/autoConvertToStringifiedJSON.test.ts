import { AutoConvertToStringifiedJSON } from './autoConvertToStringifiedJSON';

describe('string', () => {
  class MyClassStringifiedJSON {
    @AutoConvertToStringifiedJSON()
        shouldBeAString: any;
  }
  let theClass:MyClassStringifiedJSON;
  beforeEach(() => {
    theClass = new MyClassStringifiedJSON();
  });

  test('object should be in object', () => {
    theClass.shouldBeAString = { a: 'a property' };
    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  test('string object should be in object', () => {
    theClass.shouldBeAString = JSON.stringify({ a: 'a property' });
    expect(typeof theClass.shouldBeAString).toBe('string');
  });
  describe('not object should throw', () => {
    test('number type should throw error', () => {
      let isError = false;
      try {
        theClass.shouldBeAString = 22;
      } catch (e) {
        isError = true;
      }

      expect(isError).toBeTruthy();
    });
    test('not parse able string type should throw error', () => {
      let isError = false;
      try {
        theClass.shouldBeAString = '{a:object';
      } catch (e) {
        isError = true;
      }

      expect(isError).toBeTruthy();
    });
  });
});
