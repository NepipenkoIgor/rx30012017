// let p = new Promise((resolve, rej) => {
//   setTimeout(() => {
//     resolve('Hi')
//   }, 2000)
//   setTimeout(() => {
//     resolve('Angular')
//   }, 4000)
// })
//
// p.then(msg => console.log(msg));
// function* gen() {
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   yield 6;
// }
"use strict";
// pull
// let iterator = gen();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// Observer + iterator => ReactiveX
// Observable
// let sequence$ = Observable.create((observer: Observer<number|string>) => {
//
//
//   // try{
//   //   observer.next(1);
//   //   observer.next(2);
//   //   observer.next(3);
//   //   throw new Error('My error')
//   // }catch(err){
//   //   observer.error(err);
//   // }
//
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
//
//   setTimeout(() => {
//     observer.next(5);
//   },4000)
//   setTimeout(() => {
//     console.log('????')
//     observer.next('My error');
//   }, 2000)
//   observer.next('before timeout');
// })
// sequence$.subscribe(res=>console.log(res),null,()=>{
//   console.log('Done')
// })
//
// setTimeout(()=>{
//   sequence$.subscribe(res=>console.log(res),(err)=>{
//     console.log(err)
//   })
// },10000)
// sequence$.subscribe(res=>console.log(res),(err)=>{
//   console.log(err)
// })
// let subject$: BehaviorSubject<number|string> = new BehaviorSubject('start');
// subject$.subscribe(res => console.log(res))
// Observable.interval(1000)
// .map(num => num * 2)
// .from([1, 2, 3, 4, 5, 6])
// .filter(num => num % 2 === 0)
// .mergeMap((num)=>subject$)
//   .subscribe(subject$);
// --0-1-2-3-4-5.....
//    map
// --0-2-4-6-8-10....
// --0-1-2-3-4-5.....
//
// ------------|234
// let subscribtion;
// setTimeout(() => {
//   //subject$.next('10');
//   subscribtion = subject$.subscribe(res => console.log(res))
// }, 5000)
//
// setTimeout(() => {
//   //subject$.next('10');
//   subscribtion.unsubscribe();
//   console.log('unsubscribe!!')
// }, 10000)
//
//
// setTimeout(() => {
//   //subject$.next('10');
//   subject$.subscribe(res => console.log(res))
// }, 15000)
// subject$.next('13');
// subject$.next('14');
// Subject => я могу контролировать
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("whatwg-fetch");
Observable_1.Observable
    .fromEvent(document.querySelector('#search'), 'keydown')
    .debounceTime(300)
    .map((event) => event.target.value)
    .switchMap((searchTerm) => Observable_1.Observable
    .fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchTerm}`).then(res => res.json())))
    .subscribe(res => {
    console.log(res);
});
///  ??? Why promise
// ?? BehaviorSubject, AsyncSubject
