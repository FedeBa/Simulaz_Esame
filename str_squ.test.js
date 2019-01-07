const square = require('./str_squ').string_square

test('square test', () => {
    expect(square('ab')).toBe(4);
});

test('square null', () => {
    expect(square(null)).toBe(-1);
});

test('square no string', () => {
    expect(square(5)).toBe(-1);
});
