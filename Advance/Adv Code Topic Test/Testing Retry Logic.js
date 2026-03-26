test('retries until success', async () => {
  const mockApi = {
    get: jest
      .fn()
      .mockRejectedValueOnce(new Error('fail'))
      .mockRejectedValueOnce(new Error('fail'))
      .mockResolvedValue({ data: 'success' })
  };

  const { fetchWithRetry } = require('./retry');
  const result = await fetchWithRetry(mockApi, 3);

  expect(result.data).toBe('success');
  expect(mockApi.get).toHaveBeenCalledTimes(3);
});



