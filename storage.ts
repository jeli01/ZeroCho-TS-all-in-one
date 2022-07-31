const a : number = 1;        // 타입스크립트 기본 사용 
const b : number = 2;        // 소문자로만, 대문자X

function add(a : number, b : number) : number { return a+b; };     // 함수에서의 활용
const add2: (a: number, b: number) => number = (a, b) => a + b;    // 화살표 함수에서의 활용
const obj: {a: number, b: number} = {a: 1, b: 2,};                 // 객체에서의 활용

type Add = (a: number, b: number) => number                        // 타입을 따로 빼두고
const add3: Add = (a, b) => a + b;                                 // 활용할 수도 있다.
interface Add2 {                                                   // 인터페이스로도 가능하다
    (a: number, b: number) : number
}
const add4: Add2 = (a, b) => a + b;

const arr: string[] = ['123', '456']                               // 배열에서의 활용
const arr2: Array<number> = [123, 456]                             // 제네릭으로도 할수있다.
const arr3: [number, number, string] = [123, 456, 'hello'];        // 튜플: 길이가 고정된 배열

const f: true = true                                               // 이 f는 평생 true이다. (바꿀 필요가 없을때, 주로 const가 그렇기 때문에 잘 쓰인다.)

// 타입스크립트를 믿어라, 그 후에 타입스크립트가 바보같으면 우리가 타입을 추가한다.

// function add5(x: number, y: number): number;                       // 함수 선언문도 따로 타입을 뺄 수 있다.
// function add5(x, y) {
//     return x + y;
// };

let aa = 123;
aa = 'hello' as unknown as number;                                // as 자바스크립트에서 사라진다.

try {
    const array = [];                                             // 빈배열은 never 타입, 아무것도 들어갈 수 없다.
} catch(error) {
    error;
}

const head = document.querySelector('#head')!;                    // !를 사용하면 null이 사라진다, 무조건 존재한다고 생각할때 사용, but 비추! 100% null은 없다

// 타입스크립트 오타를 찾아내주는 것 뿐만아니라 수정까지, 안정성이 올라간다., 자동완성도 해준다

type World = "world" | 'hell';
const a2: World = 'world'
const b2 = `hello ${a2}`;

type Greeting = `hello ${World}`;                                 // hello world or hello hell 둘중 하나
const c2: Greeting = 'hello hell'

let arr4: string[] = [];
let arr5: Array<String> = [];
function rest(t: number, ...args: string[]) {
  console.log(t, args);
}
rest(1, '2', '3');

const tuple: [string, number] = ['1', 1];
//tuple[2] = 'hello';
tuple.push('hello');    // 타입스크립트 바보 이것까지는 못막아준다.

const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const ODirection = {
    up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

const ODirection2 = {    // 이렇게 하면 타입스크립트 바보됨 as const 써야 고정됨
    up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
}

const aaa = EDirection.Up;
const ccc = EDirection.Left;

function walk(dir: EDirection) {}

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

const obj2 = { a: '123', b: 'hello', c: 'world'} as const ;
type Key = keyof typeof obj2;                           // 키만 뽑아내는 코드
type Key2 = typeof obj2[keyof typeof obj2];               // 값을 뽑아내는 코드

type A = { a: string };                                 // 간단하게 하고싶으면 이거
const a3: A = { a: 'hello' };

interface B { a: string }                               // 복잡한 기능들이 많음, 객체지향적으로 하고싶으면 이거
const b3: B = { a: 'hello'} ;

// function addd(x: string | number, y: string | number): string | number { return x + y }    // 문제가 있는 코드
// // union
// addd(1, 2)
// addd('1', '2')
// addd(1, '2')

const result: string | number = add(1, 2);

type AAA = { hello: 'world' } & { zero: 'cho' };            // 얘는 그리고          명칭: intersection
type AAA2 = { hello: 'world' } | { zero: 'cho' };           // 얘는 또는      
const aaaa: AAA = { hello: 'world', zero: 'cho'};
const aaaa2: AAA2 = { hello: 'world', zero: 'cho'};

// 실전 예제
type Animal = { breath: true };
type Poyouryu = Animal & { breed: true};
type Human = Poyouryu & { think: true};
const zerocho: Human = { breath: true, breed: true, think: true};        // 살짝 상속의 느낌?

interface AC {
    breath: true
}

interface BC extends AC {
    breed: true
}

const bb: BC = { breath: true, breed: true};

interface A9 {                  // 선언할때 마다 합쳐짐 확장가능
    talk: () => void;
}
interface A9 {
    eat: () => void;
}
interface A9 {
    shit: () => void;
}
const a9: A9 = { talk() {}, eat() {}, shit() {} }

// interface, type, enum 네이밍 요즘 굳이 안함 손올리면 다나오기도 하고 굳이 차이 둘 필요도 없음 제네릭에만 붙이는 추세
