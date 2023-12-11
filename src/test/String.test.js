test('there no I in team ',()=>{
expect('team').not.toMatch(/I/);
});


test('but there is a "stop" in Christoph',()=>{
    expect('Christoph').toMatch(/stop/);
});


const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');

  });

  