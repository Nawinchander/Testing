test('blocks unauthorized request', () => {
  const { auth } = require('./middleware');

  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };
  const next = jest.fn();

  auth(req, res, next);

  expect(res.status).toHaveBeenCalledWith(401);
  expect(next).not.toHaveBeenCalled();
});

test('allows authorized request', () => {
  const { auth } = require('./middleware');

  const req = { user: { id: 1 } };
  const res = {};
  const next = jest.fn();

  auth(req, res, next);

  expect(next).toHaveBeenCalled();
});



