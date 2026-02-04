// Simple test to verify Jest is working
describe('Portfolio Platform Tests', () => {
  test('basic test', () => {
    expect(true).toBe(true);
  });
  
  test('math operations', () => {
    expect(1 + 1).toBe(2);
    expect(2 * 2).toBe(4);
  });
  
  test('string operations', () => {
    expect('portfolio'.length).toBe(9);
    expect('platform'.toUpperCase()).toBe('PLATFORM');
  });
  
  test('array operations', () => {
    const projects = ['Project 1', 'Project 2', 'Project 3'];
    expect(projects.length).toBe(3);
    expect(projects).toContain('Project 2');
  });
  
  test('object operations', () => {
    const project = {
      id: 1,
      title: 'Test Project',
      category: 'Web Development',
      featured: true
    };
    expect(project).toHaveProperty('title');
    expect(project.title).toBe('Test Project');
    expect(project.featured).toBe(true);
  });
});
