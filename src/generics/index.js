// without generics (use any)
var testing = function (arg) {
    return arg;
};
var a = testing(5); // number -> but TS doesn't know
var b = testing("Hello"); // string -> but TS also doesn't know
console.log(a);
console.log(b.toUpperCase());
// with generics
function identity(arg) {
    return arg;
}
var c = identity(10); // T = number
var d = identity("World"); // T = string
console.log(c);
console.log(d.toUpperCase());
// generics arrow function
var wrapArray = function (item) {
    return [item];
};
console.log(wrapArray(15));
console.log(wrapArray("John"));
// generics array
var getFirst = function (arr) {
    return arr[0];
};
var numbers = getFirst([10, 20, 30]); // T = number
var names = getFirst(["Anto", "Budi", "Andi"]); // T = string
console.log(numbers);
console.log(names);
var res = {
    data: {
        name: "John Doe",
        age: 22,
    },
    status: 200,
};
console.log(res);
console.log(res.data);
console.log(res.status);
