"use strict"
const num1 = document.getElementById("num1")! as HTMLInputElement
const num2 = document.getElementById("num2") as HTMLInputElement
const button = document.getElementById("button")!
const answer = document.getElementById("answer") as HTMLInputElement
const sample = document.getElementById("sample") as HTMLDivElement

// タプル型
// immutable配列
const tuple: [string, string, string] = ["orange", "banana", "apple"]

tuple.forEach(e => {
  sample.innerHTML += `<p>${e}</p>`
})

// any型
const anyData: any[] = ["", 1, true, {}]
// リテラル型
const userName = "Micheal Jackson"
// Union型
let union: string | number = ""
union = 1

// 型エイリアス
type Alias = number | string
let alias: Alias = 1

type Type = "number" | "string"

// 交差型
type Union1 = number | string
type Union2 = number | boolean
// Union3の型は何になる？
type Union3 = Union1 | Union2

type Car = {
  name: string
  color: string
  maxSpeed: number
}
type Taxi = Car & {
  pricePerKm: number
}
// Taxiのプロパティは？

// 関数オーバーロード
function add(n1: string, n2: string, type: Type): string
function add(n1: number, n2: number, type: Type): string
function add(n1: string, n2: number, type: Type): string
function add(n1: Alias, n2: Alias, type: Type) {
  if (type === "number") {
    return +n1 + +n2
  }
  return n1.toString() + n2.toString()
}
const result = add("hello", "world", "string")
const result2 = add(1, 2, "number")
const result3 = add("hello", 2, "string")

// ジェネリクス
// basic_generics
const arr: string[] = []

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("done")
  }, 1000)
})

promise.then(data => data)

// custom_generics
function merge<T extends object, U>(o1: T, o2: U) {
  return Object.assign(o1, o2)
}

const mergeObj = merge({ name: "Jimmy" }, 22)
console.log(mergeObj)
