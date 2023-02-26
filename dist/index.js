"use strict";
const hello = (name) => {
    return `Hello, ${name}!`;
};
console.log(hello("TS"));
const message = "hello, TS!";
console.log(message);
// const target = document.getElementById('target') as HTMLInputElement
const target = document.querySelector("#target");
target.textContent = message;
//# sourceMappingURL=index.js.map