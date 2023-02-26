"use strict"
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const button = document.getElementById("button")
const answer = document.getElementById("answer")
const sample = document.getElementById("sample")

// タプル型
// immutable配列
const tuple = ["orange", "banana", "apple"]
tuple.forEach(e => {
  HTMLElement.innerHTML += `<p>${e}</p>`
})
// any型
const anyData = ["", 1, true, {}]
// リテラル型
const userName = "MMicheal Jackson"
// Union型
let union = ""
union = 1
function add() {
  if (type === "number") {
    return +n1 + n2
  }
  return n1.toString() + n2.toString()
}
const result = add("hello", "world", "string")
const result2 = add(1, 2, "number")
const result3 = add("hello", 2, "string")

// ジェネリクス
// basic_generics
const arr = []
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done")
  }, 1000)
})
promise.then(data => data)
// custom_generics
function merge(o1, o2) {
  return Object.assign(o1, o2)
}
const mergeObj = merge({ name: "Jimmy" }, 22)
console.log(mergeObj)
