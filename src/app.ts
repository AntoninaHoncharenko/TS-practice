const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// 1.

// let age: number = 50;
// let name1: string = "Max";
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

let age: number;
age = 50;

let name1: string;
name1 = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

// let callback = (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };

// 2.
let anything: any;
anything = -20;
anything = "Text";
anything = {};

// 3.
let some: unknown;
some = "Text";

let str: string;

if (some === "string") {
  str = some;
}

// 4.
let person: [string, number];
person = ["Max", 21];

// 5.
enum Status {
  LOADING,
  READY,
}

const page = {
  load: Status.READY,
};

if (page.load === Status.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Status.READY) {
  console.log("Сторінка завантажена");
}

// 6.
function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): void {
  throw new Error("Error");
}

let unionType: string | number;

let literalType: "enable" | "disable";

// 7.
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
