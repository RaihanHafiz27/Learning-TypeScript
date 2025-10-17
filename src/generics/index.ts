// without generics (use any)
const testing = (arg: any): any => {
  return arg;
};

let a = testing(5); // number -> but TS doesn't know
let b = testing("Hello"); // string -> but TS also doesn't know

console.log(a);
console.log(b.toUpperCase());

// with generics
function identity<T>(arg: T) {
  return arg;
}

let c = identity<number>(10); // T = number
let d = identity<string>("World"); // T = string

console.log(c);
console.log(d.toUpperCase());

// generics arrow function
const wrapArray = <T>(item: T): T[] => {
  return [item];
};

console.log(wrapArray(15));
console.log(wrapArray("John"));

// generics array
const getFirst = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

let numbers = getFirst([10, 20, 30]); // T = number
let names = getFirst(["Anto", "Budi", "Andi"]); // T = string

console.log(numbers);
console.log(names);

// generics with interface
interface ApiResponse<T> {
  data: T;
  status: number;
}

const res: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "John Doe",
    age: 22,
  },
  status: 200,
};

console.log(res);
console.log(res.data);
console.log(res.status);
