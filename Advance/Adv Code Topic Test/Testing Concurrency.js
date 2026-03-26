test('handles concurrent increments safely', async () => {
  const { increment, getCount } = require('./counter');

  await Promise.all([increment(), increment(), increment()]);

  expect(getCount()).toBe(3); // ❌ might fail due to race condition
});


