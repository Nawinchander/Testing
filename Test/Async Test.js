// fetchUser.test.js
test('fetches user data', async () => {
  const mockApi = {
    get: jest.fn().mockResolvedValue({ data: { name: 'Nawin' } })
  };

  const { fetchUser } = require('./fetchUser');
  const result = await fetchUser(mockApi);

  expect(result.name).toBe('Nawin');
});


