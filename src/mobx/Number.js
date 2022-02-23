import {action, autorun, makeAutoObservable, observable} from 'mobx'
import localStorageMobx from 'mobx-localstorage'
import mobx from "mobx"

//  export const NumberCount = observable({
//     number: 0,
//
//     get getNumber() {
//         return this.number
//     },
//
//     increment() {
//         this.number = this.number + 1
//     },
//
//     decrement() {
//         this.number = this.number - 1
//     }
// }, {
//     increment: action,
//     decrement: action
// })



export default class NumberCount {

    constructor(number) {
        this._number = parseInt(localStorage.getItem('number2')) || 10
        makeAutoObservable(this)

    }


   get number() {
        // this.number = parseInt(localStorage.getItem('number'))
        return this._number
    }

    calculateNumber(value) {
        this._number = this._number + value
        // localStorage.setItem('number', this.number.toString())
    }

    increaseNumber() {
        this._number = this._number + 1
        localStorage.setItem('number2', this._number.toString())
    }

    decreaseNumber() {

        this._number = this._number - 1
        localStorage.setItem('number2', this._number.toString())
    }
}
