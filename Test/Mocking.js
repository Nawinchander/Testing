test('saves user to DB', () => {
  const mockDb = {
    save: jest.fn()
  };

  createUser({ name: 'John' }, mockDb);

  expect(mockDb.save).toHaveBeenCalledWith({ name: 'John' });
});


