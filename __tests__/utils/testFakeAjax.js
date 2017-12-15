import fakeAjax from 'utils/fakeAjax';

describe('Test for fakeAjax', () => {
  it('works with promises', () => {
    expect.assertions(1);
    return fakeAjax({}).then(data => expect(typeof data).toBe('string'))
      .catch(error => expect(error).toBeInstanceOf(Error));
  });
});
