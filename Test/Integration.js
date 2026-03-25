test('fails if email missing', () => {
  const mockDb = { save: jest.fn() };

  expect(() => registerUser({}, mockDb)).toThrow('Email required');
});


