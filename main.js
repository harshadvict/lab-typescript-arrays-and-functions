"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayFindMultiples = function (myArray) {
        var tempArr = new Array();
        var i = 0;
        for (var index = 0; index < myArray.length; index++) {
            if (myArray[index] % 5 == 0 || myArray[index] % 10 == 0) {
                tempArr[i] = myArray[index];
                i++;
            }
        }
        return tempArr;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        return myArray;
    };
    ArrayComponent.prototype.arraySplit = function (myString) {
        var tempArr = new Array();
        var i = 0;
        for (var index = 0; index < myString.length; index++) {
            var flag = false;
            for (var j = 2; j < parseInt(myString[index]); j++) {
                if (parseInt(myString[index]) % j == 0) {
                    flag = true;
                }
            }
            if (flag == false) {
                tempArr[i] = myString[index];
            }
        }
        return tempArr;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        return myArray.sort();
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        var i = 0;
        for (var index = 0; index < myArray.length; index++) {
            if (myArray[index] % 3 == 0) {
                console.log(myArray[index]);
                myArray[index] = 5;
            }
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();
var myArray1 = ["34", "45", "60", "23", "13", "25", "70"];
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray1));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
