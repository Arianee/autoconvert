import { AutoConvertToBoolean } from './autoConvertToBoolean';
describe('Boolean', () => {
  test('boolean true string should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = 'true';

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(true);
  });

  test('boolean false string should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = 'false';

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(false);
  });
  test('boolean true should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = true;

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(true);
  });
  test('boolean false should return boolean', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean
      shouldBeABoolean: any;
    }

    const d = new MyClassBoolean();
    d.shouldBeABoolean = false;

    expect(typeof d.shouldBeABoolean).toBe('boolean');
    expect(d.shouldBeABoolean).toBe(false);
  });
  test('not boolean-able should thow', () => {
    class MyClassBoolean {
      @AutoConvertToBoolean
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
