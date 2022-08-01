// const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
//     input.status === 'rejected'
// };
// const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
//     input.status === 'fulfilled'
// };

// const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
// const errors = promises.filter(isRejected);

// export {};

// // function add(x: string| number, y: string | number) : string | number { return x + y};
// //  // 이거 안된다고 말을 했었다.

// // add(1, 2);
// // add('1', '2');
// // add(1,'2');     // 이런 가능성
// // add('1',2);     // 이런 가능성이 있기 때문에! 잘못된 코드 제네릭을 도입해보자

// // function add(x: string, y: string): string;
// // function add(x: string, y: string): string;
// // function add(x ,y) {        // 이렇게해도 타입 지정을 또 해줘야됨... 결국 똑같은 문제 발생
// //     return x + y;
// // }

// function add<T extends string | number> (x: T, y: T): T {     // extends로 제한을 걸 수 있다.
//     return x + y;
// };

// add(1, 2);
// add('1', '2')
// add('1', 2);     // 에러!
// add('2', 1);     // 에러!   원했던 바 달성

// function add2<T extends number, K extends string>(x: T, y: K) : T {

// } 
// // 이런식으로 여러 제네릭 선언 가능하다.

// 실전 분석예제 가즈아

// interface Array<T> {    // 인터페이스도 제네릭 사용 가능
//   forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
//   map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
//   filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
//   filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[];
// }

// [1,2,3].forEach((item) => { console.log(item) });
// // 어째서 타입스크립트가 추론을 잘하는지 분석해보자
// // 그리고 제네릭과 타입 강제변환 꺽쇠 헷갈리지 않게 하자
// // const filtered = ['1',2,'3',4,'5'].filter((value) => typeof value === 'string');
// // 얘는 왜 타입스크립트가 추론을 잘 하지 못할까? 그러면 우리가 어떻게 바꾸어 주어야 할까?
// const predicate = (value: string | number): value is string => typeof value === 'string'; // 이걸 추가 시키면 됨
// const filtered = ['1',2,'3',4,'5'].filter((value) => typeof value === 'string');

// const result = ['1', 2].filter<string extends string | number>((value) => typeof value === 'string);
// 얘는 안된다! why? 안에있는 함수가 커스텀 타입가드가 아니기 때문이다.

// 각종 제한 방법을 알아볼까?

// function add<T extends (a: string) => number>(x: T): T { return x };

// add((a) => +a);
// // <T extends {...}>
// <T extends any[]
// <T extends (...args: any) => any>
// < T extends abstract new (...args: any) => any>