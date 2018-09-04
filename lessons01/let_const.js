// console.log(a);
// {
//     var a = 12;
//     let b = 13;
//     {
//         console.log(b);
//     }
// }
// console.log(a);
// console.log(b);

//泄密
// for(var i=0; i<5; i++){}
// console.log(i);
// for(let j=0; j<5; j++){}
// console.log(j);

//提升
// function f() {
//     console.log(a);
//     let a = 12;
// }
// f();

//临时失效区
// var a = 10;
// function f() {
//     console.log(a);
//     let a = 20;
//     console.log(a);
// }
// f();

// 作用域内不能重复声明
// {
//     let a;
//     var a;
// }

//代替立即执行匿名函数
// var config = (function() {
//     var config = [];
//     config.push('a');
//     config.push('b');
//     return config;
// })();

// let config1;
// {
//     config1 = [];
//     config1.push('a');
//     config1.push('b');
// }

// 在es5中 函数被提升
// function ab() { console.log(1); }
// function f() {
//     ab();
//     function ab(){ console.log(2); }
// }
// f();

// var arr = [];
// function f() {
//     for(var i=0; i<5; i++) {
//         arr.push(function() {
//             console.log(i);
//         })
//     }
// }
// f();
// arr[1]();    //5

// var arr = [];
// function f() {
//     for(let i=0; i<5; i++) {
//         arr.push(function() {
//             console.log(i);
//         })
//     }
// }
// f();
// arr[1]();

//常量使用,对物理指针不能修改。
// const a = 12;
// a =12;

const a = {
    name: 'alvin'
}
a.name = 'alvinscript';

Object.freeze(a);
a.name='leo';
console.log(a);
