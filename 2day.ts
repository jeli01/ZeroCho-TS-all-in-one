// interface TA { a: string }
// const obj = { a: 'hello', b: 'world' };
// const obj1: TA = obj;
// // 중간에 변수를 껴주면 잉여 속성을 검사하지 않는데 하지만 객체리터럴을 바로 넣어주면 검사를 진행한다.

// function a(): void {
//     return undefined       // undefined은 가능 null은 안된다, return을 아예 안적는 것도 된다.
// }

// const b = a();

// interface Human {
//     talk: () => void;
// }

// const Thuman: Human = {
//     talk() { return 'abc'; }    // 아니 왜 되지? 그이유는
// }

// // 세가지 종류가 있다. 함수에 직접적인 리턴값이 void (진짜 리턴값이 없다는 의미),
// // 매개변수와 메서드 void -> 상관없음 이 둘은 (리턴값을 사용하지 않겠다는 의미임)
// function a2(callback: () => void): void {
// }

// a2(() => {
//     return '3'
// })

// // 이제부터 실전적인 예제를 살펴보자
// // 구현은 하기 싫을때 이렇게 declare를 활용하자 어딘가에 구현이 되어있다는 것을 암시한다. -> 이 타입스크립트 코드말고 다른곳에서 불러왔을 수도 있으니!
// declare function forEach(arr: number[], callback: (el: number) => undefined): void;   //  얘는 error why? return 값이 number이기 때문에!
// declare function forEach(arr: number[], callback: (el: number) => number): void;      // push의 반환형이 number이기 때문에 에러가 안난다~
// declare function forEach(arr: number[], callback: (el: number) => void): void;        // 얘도 에러가 안난다! 이것이 바로 매개변수에서 쓰이는 void의 활용

// let target: number[] = [];
// forEach([1, 2, 3], el => target.push(el));

// interface A2 {
//     talk: () => void;
// }
// const a4: A2 = {
//     talk() { return 3 },
// }
// const b2 = a4.talk() as unknown as number;          // void 이기때문에 number로 바꾸려면 이렇게 해야됨 as number만 쓰면 안됨 타입스크립트에서 void 바꾸는건 실수라고 판단함
//                                                     // 물론 이렇게 코딩하면 안되겠지?
// // const b3 = <number><unknown>a4.talk()            // 두가지 방법이 있지만 as 방법을 추천 why? 리액트 할때 꺽쇠 되게 헷갈림 +
//                                                     // 컴퓨터가 잘 이해 못하는 현상 발생 (playground에서 벌써 이해 못하는 현상 발생중 주석처리 하겠음)

// // unknown vs any     unknown은 아직 타입을 잘 모를때 사용, any는 그냥 타입 검사를 포기하는 것 any는 진짜 쓰지말자..

// try {

// } catch (error) {                     // unknown이 쓰이는 환경 예시   error가 바로 unknown! 우리가 as로 확실히 해주어야 한다.
//     (error as Error).message;
// }

// declare let c: number;         // 외부에 있음을 보장한다. 함수가 아닌 그냥 변수도 declare 가능!
// c = 3;

// // 타입가드 가잣
// function numOrStr(a: number | string) {
//     if (typeof a === 'string') {
//         a.split(',');
//     }    else {
//         a.toFixed(1);
//     }
// }
// numOrStr('123');
// numOrStr(1);

// function numOrNumArray(a: number | number[]) {
//     if (Array.isArray(a)) {   // number[]
//         a.concat(4);
//     } else {
//         a.toFixed(3);
//     }
// }

// numOrNumArray(123);
// numOrNumArray([1, 2, 3]);

// class A {
//     aaa() {}
// }

// class TB {
//     bbb() {}
// }

// function aOrb(param: A | TB) {        // 인스턴스 타이핑
//     if(param instanceof A) {
//         param.aaa();
//     }
//     else {

//     }
// }

// aOrb(new A());
// aOrb(new TB());

// type B = { type: 'b', bbb: string};
// type C = { type: 'c', ccc: string};
// type D = { type: 'd', ddd: string};

// function typeCheck(a: B | C | D) {          // 속성으로 구별이 가능하다.    (값이 다른것과 속성 이름 자체가 다른 것 두가지로 구별이 가능하다)
//     if(a.type === 'b') {
//         a.bbb;
//     } else if (a.type === 'c') {
//         a.ccc;
//     } else {
//         a.ddd;
//     }
// }

// function typeCheck2(a: B | C | D) {
//     if('bbb' in a) {
//         a.bbb;
//     } else if ('ccc' in a) {
//         a.ccc;
//     } else {
//         a.ddd;
//     }
// }

// const human = { type: 'human'};   // 객체구별을 위해 라벨을 달아두는 습관을 들이자
// const dog = { type: 'dog'};
// const cat2 = { type: 'cat'};

// // if (a.type === 'human') {

// // }

// interface Cat { meow: number }
// interface Dog { bow: number }
// function catOrDog(a: Cat | Dog): a is Dog {
//     // 타입 판별을 여러분이 직접 만드세요.
//     if ((a as Cat).meow) { return false}
//     return true;
// }
// // 타입을 구분해주는 커스텀 함수를 여러분이 직접 만들 수 있어요.

// function pet(a: Cat | Dog) {
//     if(catOrDog(a)) {
//         console.log(a.bow);
//     }
//     if('meow' in a) {
//         console.log(a.meow);
//     }
// }
// const cat: Cat | Dog = { meow: 3 }
// if (catOrDog(cat)) {
//     console.log(cat.meow);
// }
// if ('meow' in cat) {
//     console.log(cat.meow);
// }

// // 구별하는 방법 typeof, instanceof, in, Array.isArray 그리고 커스텀 타입가드 함수

// // 커스텀 타입가드 한번더 예시를 들어보자! 제네릭은 나중에 알려줄게~
// // const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
// //     input.status === 'rejected'
// // };
// // const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
// //     input.status === 'fulfilled'
// // };

// // const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
// // const errors = promises.filter(isRejected);

// // export {};

// // Promise -> Pending -> Settled(Resolved, Rejected) 

// interface AAA {
//     readonly a: string;
//     b: string;
// }
// const aaaa: A = { a: 'hello', b: 'world'};
// aaaa.a = '123';     // readonly로 실수로 바꾸는 것을 막을 수 있다!

// // 인덱스 시그니쳐
// type BBBB= 'Human' | 'Mammal' | 'Animal';         // interface는 |,& 안됨
// type AAAA = { [key: string]: number}; // 모든키는 string 모든 값은 number 였으면 좋겠어!
// const aaaaa: AAAA = { a: 3, b: 5, c: 5, d: 123};
// type BBBBB= { [key in BBBB]: BBBB};
// const bbbbb: BBBBB = { Human: 'Animal', Mammal: 'Human', Animal: 'Mammal'};

// interface QA {
//     readonly a: string;
//     b: string;
// }
// class QB implements QA {
//     private readonly a: string;
//     protected b: string;
//     c: string = 'wow';     // public은 안써도 기본

//     method() {
//         console.log(this.a);
//         console.log(this.b);
//         console.log(this.c);
//     }
// }
// class QC extends QB {
//     method() {
//         console.log(this.a);
//         console.log(this.b);
//         console.log(this.c);
//     }
// }
// new QC().a;
// new QC().b;
// new QC().c;

// //              public protected private
// //클래스내부        O       O       O
// //인스턴스          O       X       X
// //상속클래스        O       O       X

// /*
// 추상 클래스
// abstract class B {
//     private readonly a: string = '123';
//     b: string = 'world';
//     c: string = 'wow';

//     abstract method(): void;
//     method2() {
//         return '3';
//     }
// }

// class C extends B {
//     method() {
//         console.log(this.a);
//         console.log(this.b);
//         console.log(this.c);
//     }
// }
// new C().a;
// new C().b;
// new C().c;
// */

// // optional

// function abc2(a: number[]) {}  // 다받고 싶으면 그냥 이렇게 쓰고
// function abc(a: number, b?: number, c?: number) {}
// abc(1)
// abc(1, 2)
// abc(1, 2, 3)

// let obj2: { a: string, b?: string } = { a: 'hello', b: 'world' }
// obj2 = { a: 'hello' };

// // 제네릭 가즈아
// /*
// function add(x: string| number, y: string | number) : string | number { return x + y}; // 이거 안된다고 말을 했었다.
// add(1, 2);
// add('1', '2');
// */