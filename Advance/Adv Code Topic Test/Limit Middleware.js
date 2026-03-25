test('blocks after limit exceeded', () => {
  const middleware = rateLimiter(2);

  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };
  const next = jest.fn();

  middleware(req, res, next);
  middleware(req, res, next);
  middleware(req, res, next);

  expect(res.status).toHaveBeenCalledWith(429);
});

