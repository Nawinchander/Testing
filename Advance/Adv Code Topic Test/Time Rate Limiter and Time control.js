test('resets after time window', () => {
  jest.useFakeTimers();
  const { rateLimiter } = require('./rateLimiter');

  const limiter = rateLimiter(2, 1000);

  expect(limiter()).toBe(true);
  expect(limiter()).toBe(true);
  expect(limiter()).toBe(false);

  jest.advanceTimersByTime(1000);

  expect(limiter()).toBe(true);
});


