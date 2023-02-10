// const button = document.querySelector("button")! as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
// 1.
// let age: number = 50;
// let name1: string = "Max";
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
var callback = function (a) {
    return 100 + a;
};
var age;
age = 50;
var name1;
name1 = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
// let callback = (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };
// 2.
var anything;
anything = -20;
anything = "Text";
anything = {};
// 3.
var some;
some = "Text";
var str;
if (some === "string") {
    str = some;
}
// 4.
var person;
person = ["Max", 21];
// 5.
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var page = {
    load: Status.READY
};
if (page.load === Status.LOADING) {
    console.log("Сторінка завантажується");
}
if (page.load === Status.READY) {
    console.log("Сторінка завантажена");
}
// 6.
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var unionType;
var literalType;
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
