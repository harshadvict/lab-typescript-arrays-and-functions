import { StringManipulationService } from "./app-service";

export class ArrayComponent implements StringManipulationService {

    arrayFindMultiples(myArray: any[]): any[] {
        let tempArr: any[] = new Array();
        let i = 0;
        for (let index = 0; index < myArray.length; index++) {
            if (myArray[index] % 5 == 0 || myArray[index] % 10 == 0) {
                tempArr[i] = myArray[index];
                i++;
            }
        }
        return tempArr;
    }
    arraySeparate(myArray: any[]): any[] {
        return myArray;
    }
    arraySplit(myString: string[]): string[] {
        let tempArr: any[] = new Array();
        let i = 0;
        for (let index = 0; index < myString.length; index++) {
            var flag = false;
            for (let j = 2; j < parseInt(myString[index]); j++) {
                if (parseInt(myString[index]) % j == 0) {
                    flag = true;
                }
            }
            if (flag == false) {
                tempArr[i] = myString[index];
            }
        }
        return tempArr;
    }
    arraySort(myArray: any[]): any[] {
        return myArray.sort();
    }
    arrayReplace(myArray: any[]): any[] {
        let i = 0;
        for (let index = 0; index < myArray.length; index++) {
            if (myArray[index] % 3 == 0) {
                console.log(myArray[index]);
                myArray[index] = 5;
            }

        }
        return myArray;
    }
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();
let myArray1: string[] = ["34", "45", "60", "23", "13", "25", "70"];
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray1));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));




