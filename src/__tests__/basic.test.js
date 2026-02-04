test('basic test to verify Jest works', () => {
  expect(true).toBe(true);
});

test('simple math', () => {
  expect(1 + 1).toBe(2);
});

test('array operations', () => {
  const projects = ['Project 1', 'Project 2'];
  expect(projects).toHaveLength(2);
});
