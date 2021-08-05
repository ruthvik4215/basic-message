"use strict";

Test = function Test() {
  var testCase = "case 1";

  caseOne = function caseOne() {
    console.log(testCase);
  };

  return caseOne;
};

var yourTest = Test();
yourTest();