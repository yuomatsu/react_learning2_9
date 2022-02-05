//  eslint-disable @typescript-eslint/no-unused-vars

// typeScriptの基本の型

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array配列
let arr1: Array<number> = [0, 1, 2];
let ar2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false;

// void
const func1 = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
