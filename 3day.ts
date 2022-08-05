// 여긴 저번 챕터에서 이해못한것과 비슷해서.... 한번더 듣자

// interface Array<T> {    // 인터페이스도 제네릭 사용 가능
//   forEach(callbackfn: (value: T, index: number) => void): void;
//   map<U>(callbackfn: (value: T, index: number) => U): U[];
//   filter<S extends T>(predicate: (value: T) => value is S): S[];
// }

// // visual code에서 F12 누르면 위와 비슷한 정답이 나오니 스스로 타입을 구현해보고 잘 맞췄는지 비교해보자~
// // 평소에 안쓰는 인자까지 맞출 필요는 없고 적당히 타협하면서 해도됨

// // 공변성, 반공변성, 이변성, 불변성 (용어는 중요하지 않다. 용어는 무시해도 된다. 오히려 헷갈릴 수 있음)
// // 그냥 깔끔하게 외워버리자 그게 편하다
// function a(x: string | number): number {
//     return 0;
// }

// type B = (x: string) => number | string;
// let b: B = a;
// // 리턴 값은 더 넓은 타입, 매개변수는 더 좁은 타입이면 대입이 가능하다.

// let a2 = 5;   // number 타입 (타입스크립트가 모든가능성 고려 타입 넓히기)
// const a3 = 5; // 5 타입        
// //타입가드는 좁혀주는것

// // 함수 오버로딩

// declare function add(x: number, y: number): number
// declare function add(x: number, y: number, z: number): number    // 옵셔널로 해도 가능하긴하다.
// declare function add(x: string, y: string): string    // 옵셔널로 해도 가능하긴하다.

// add(1, 2);
// add(2, 3, 4);

// 인터페이스, 클래스도 가능

// interface Add {
//     (x: number, y: number): number;
//     (x: string, y: string): string;
// }

// const add: Add = (x: any, y: any) => x + y;

// class A {
//     add(x: number, y: number): number;
//     add(x: string, y: string): string;
//     add(x: any, y: any) {
//         return x + y;
//     }
//     // 오버로딩 했으면 any는 어차피 무시된다 위에 두개만 신경쓰면 된다.
// }

// const c = new A().add(1, 2);

// interface Axios {
//     get(): void;
// }

// interface CustomError {
//     name: string;
//     message: string;
//     stack?: string;
//     response?: {
//         data: any;
//     }
// }
// declare const axios: Axios;

// (async () => {
//     try {
//         await axios.get();
//     } catch (err: unknown) {
//         const customError = err as CustomError; // as를 줄이기 위함
//         console.error((customError).response?.data);
//         customError.response?.data  // 타입에 ?있으면 사용때에도 ?를 넣어야한다.
//     }
// })();

// // but 이코드는 매우 문제가 있는 코드 걍 개념 확인용으로 알도록하자..
// // 따로 클래스를 만들어서
// // if (err instanceof CustomError) 로 감싸주어야 한다.
// // 만약 에러가 CustomError 가 아닐경우 터져버리기 때문이다.

// // 유틸리티 타입

// //Partial -> 모두 옵셔널로
// interface Profile {
//     name: string,
//     age: number,
//     married: boolean,
// }

// const zerocho: Profile = {
//     name: 'zerocho',
//     age: 29,
//     married: false,
// }

// const newZeroCho: Partial<Profile> = {
//     name: 'zerocho',
//     age: 29,
// }

// const newZeroCho2: Pick<Profile, 'name' | 'age'> = {
//     name: 'zerocho',
//     age: 29, 
// }

// const newZeroCho3: Omit<Profile, 'married'> = {
//     name: 'zerocho',
//     age: 29, 
// }

// type Animal = 'Cat' | 'Dog' | 'Human';
// type Mammal = Exclude<Animal, 'Human'>;

// type A = Exclude<keyof Profile, 'married'>

// // 제네릭으로 타입 만들때 제한조건을 주어주는 것을 생각해보자..! 이상한거 들어갔을때 에러 띄워주도록
// // omit 만들때 생각해보세용

