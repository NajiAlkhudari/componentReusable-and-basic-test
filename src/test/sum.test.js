
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });



  test('adds 1 + 2 to not equal 4', () => {
    expect(sum(1, 2)).not.toBe(5);
  });


  test('object assignment',()=>{
    const data ={one : 1};
    data ["two"] =2;
    data["three"]= undefined ;
    expect(data).toEqual({one:1,two:2});
  });

  test('object assignment with undefined',()=>{
    const data ={one : 1};
    data ["two"] =2;
    data["three"]= undefined ;
    expect(data).toStrictEqual({one:1,two:2 , three : undefined});
  });


  test("adding positive numbers without zero",()=>{
    for(let a=1;a<10;a++)
    for(let b=1;b<10;b++)
  expect(a+b).not.toBe(0);
  })



  