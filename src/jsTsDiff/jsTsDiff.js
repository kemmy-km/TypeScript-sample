// TypeScript + VSCodeで快適プログラミング
// https://note.com/erukiti/n/nc1525b869130

const hoge = (arg) => console.log(arg + 1)
hoge(1) // 2
hoge('1') // 11
hoge([1, 2]) // 1,21

/**
 * JavaScriptでちゃんと型チェックをする場合
 */
const hoge2 = (arg) => {
  if (typeof arg === 'number') {
    console.log(arg + 1)
  }
}
hoge2(1) // 2
hoge2('1') // 何も表示されない
hoge2([1, 2]) // 何も表示されない
