const filterBiggestNumbers = require("./filterBiggest");

// Exercise 5
test("Will throw if the first parameter is not an array", () => {
  expect(() => filterBiggestNumbers("I am not an array.",0)).toThrowError();
});

test("Will return correct output for reasonable input", () => {
  // ✅ Create a test array
  // ✅ Capture your results
  // ✅ Create an array for all of the expected values
  // ✅ Create an array for all of the reject values
  // ✅ Iterate over last two arrays to confirm that the result array has/doesn't have those values
  const givenNumbers = [10, 3, 8, 7];

  const testedFunction = filterBiggestNumbers(givenNumbers,7);

  const toBeReturnedNumbers = [10,8];

  const rejectedNumbers = [3,7];

  toBeReturnedNumbers.forEach(v => expect(testedFunction).toContain(v));
  rejectedNumbers.forEach(v=> expect(testedFunction).not.toContain(v));
});

test("Will throw if the second argument is not a number", () => {
  expect(()=> filterBiggestNumbers([],"I am not a number")).toThrowError();
});

test("Will work if the second number not an integer", () => {
  const givenNumbers = [1, -3, 8, 7];

  const testedFunction = filterBiggestNumbers(givenNumbers,0.5);

  const toBeReturnedNumbers = [1,8,7];

  const rejectedNumbers = [-3];

  toBeReturnedNumbers.forEach(v => expect(testedFunction).toContain(v));
  rejectedNumbers.forEach(v=> expect(testedFunction).not.toContain(v));

});

test("Will work if the min is a negative number", () => {
  const givenNumbers = [-1, -3, 8, 7];

  const testedFunction = filterBiggestNumbers(givenNumbers,-3);

  const toBeReturnedNumbers = [-1,8,7];

  const rejectedNumbers = [-3];

  toBeReturnedNumbers.forEach(v => expect(testedFunction).toContain(v));
  rejectedNumbers.forEach(v=> expect(testedFunction).not.toContain(v));

});
