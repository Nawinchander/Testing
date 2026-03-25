test('matches snapshot', () => {
  const data = { name: 'Nawin', role: 'Engineer' };
  expect(data).toMatchSnapshot();
});


