"use strict";

it('should calculate monthly rate', function () {
  expect(calcMonthlyPayment(10000, 10, 4.5)).toEqual(103.63840875701705);
});
