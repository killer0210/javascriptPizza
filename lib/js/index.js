"use strict";

const arr = [23, 44, 12];
const myfunc = function myfunc(a) {
  console.log("too :".concat(a));
};
const arr2 = [].concat(arr, [44, 1223]);
myfunc(arr2[1]);