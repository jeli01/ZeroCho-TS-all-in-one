// const a = '5';
// const b = 5;
// const c = true;
// const d = undefined;
// const e = null;                -> 이렇게 해도 타입을 추론을 한다.
//                                -> 타입스크립트를 최대한 믿다가 틀리면 그때 우리가 나서는게 낫다.
/*
const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
*/
//const f: true = true;    // 나는 true만 받을거야!!
//const f: 5 = 5;        // 나는 5만 받을거야!!!! 애초에 const는 바뀔 필요가 없으니까 이런 경우가 있음.

//const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
//const arr: string[] = ['123', '456'];
//const arr2: Array<number> = [123, 456];
//const arr3: [number, number, string] = [123, 456, 'hello']        // 튜플

// function add(x: number, y: number): number { return x + y }
// const add: (x: number, y: number) => number = (x, y) => x + y;
/* 
  type Add = (x: number, y: number) => number;
  const add: (x: number, y: number) => number = (x, y) => x + y
*/

/*
  function add(x: number, y: number): number;
  function add(x, y) {
    return x + y;
  }
*/
/*
  interface Add {
    (x: number, y: number): number;
  }

  const add: Add = (x, y) => x + y;
*/
/*
let aa = 123;
aa = 'hello' as unknown as number;
*/
/*
try {
  const array: string = [];
  array[0];
} catch(error) {
  error;
}                            빈배열은 never 타입 그래서 타입 정해줘서 never타입에서 벗어나자
*/

/*
const head = document.querySelector('#head')!;        // null이 사라짐 무조건 존재한다고 생각할때 but 비추!
console.log(head);

const head = document.querySelector('#head');
if( head) {
  console.log(head);
}
*/

/*
type World = "world" | 'hell';
const a: World = 'world'
const b = `hello ${a}`;

type Greeting = `hello ${World}`;
const c: Greeting = 'hello hell'
*/

/* 
  let arr: string[] = [];
  let arr2: Array<String> = [];
  function rest(a, ...args: string[]) {
    console.log(a, args);
  }

  rest('1', '2', '3');

  const tuple: [string, number] = ['1', 1];
  tuple[2] = 'hello';
  tuple.push('hello');
*/

/*
 const enum EDirection {
  Up,
  Down,
  Left,
  Right,
 }
*/

/* 
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
*/

/*

const a = EDirection.Up;
const c = EDirection.Left;

function walk(dir: EDirection) {}

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

*/

/*

const obj = { a: '123', b: 'hello', c: 'world' };
type Key = keyof typeof obj;
*/

