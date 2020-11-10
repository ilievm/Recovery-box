const controller = require('../controller')

console.log("LOGE:| ", controller.getAllData);

test('it should please do SOMETHING', () => {
  expect(controller.getAllData()).resolves.toBe(1);
});