const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000000;
    actual = sum(500000, 500000);
    expect(actual).toBe(expected)
    
  }); 

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-5, -5);
    expect(actual).toBe(expected)
    
  });

  test('can add zero', () => {
    expected = 2000;
    actual = sum(2000, 0);
    expect(actual).toBe(expected)
    
  });

});

describe('subtract', () => {

  test('can substract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can substract two large positive numbers', () => { 
    expected = 500000;
    actual = subtract(1000000, 500000);
    expect(actual).toBe(expected)
    
  }); 

  test('can substract two negative numbers', () => {
    expected = 10;
    actual = subtract(-5, -15);
    expect(actual).toBe(expected)
    
  }); 

  test('can substract zero', () => {
    expected = 2000;
    actual = sum(2000, 0);
    expect(actual).toBe(expected)
    
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 25;
    actual = multiply(5, 5);
    expect(actual).toBe(expected);
  });

  test('can multiple two large positive numbers', () => { 
    expected = 25000000;
    actual = multiply(5000, 5000);
    expect(actual).toBe(expected)
    
  }); 

  test('can multiply two negative numbers', () => {
    expected = 100;
    actual = multiply(-10, -10);
    expect(actual).toBe(expected)
    
  });  

  test('can multiple zero', () => {
    expected = 0;
    actual = multiply(2000, 0);
    expect(actual).toBe(expected)
    
  });  

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 5;
    actual = divide(100, 20);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 7;
    actual = divide(70000, 10000);
    expect(actual).toBe(expected)
    
  }); 

  test('can divide two negative numbers', () => {
    expected = 5;
    actual = divide(-50, -10);
    expect(actual).toBe(expected)
    
  });  

  test('can divide zero', () => {
    expected = Infinity;
    actual = divide(2000, 0);
    expect(actual).toBe(expected)
    
  });  

});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expected = 3;
    actual = modulus(13, 5);
    expect(actual).toBe(expected);
  }); 

  test('can modulus two large positive numbers', () => { 
    expected = 1000;
    actual = modulus(50000, 7000);
    expect(actual).toBe(expected)
    
  }); 

  test('can modulus two negative numbers', () => {
    expected = -3;
    actual = modulus(-53, -10);
    expect(actual).toBe(expected)
    
  });  

  test('can modulus zero', () => {
    expected = Infinity;
    actual = divide(2000, 0);
    expect(actual).toBe(expected)
    
  }); 

});

describe('even', () => {

  test('can test whether number is even', () => {
    expected = true;
    actual = even(10);
    expect(actual).toBe(expected);
  }); 

});

describe('odd', () => {

  test('can test whether number is odd', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });  

});
