import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const NumberComp = observer(() => {

    const {number} = useContext(Context)

    console.log(number.number)

    const incr = () => {
        number.increaseNumber()
    }

    const decr = () => {
        number.decreaseNumber()
    }

    const calc = (value) => {
        number.calculateNumber(value)
    }

    return (
        <div>
            <h1>{number.number}</h1>
            <button onClick={() => {number.increaseNumber()}}>increase</button>
            <button onClick={decr}>decrease</button>
            <button onClick={() => {calc(10)}}>decrease</button>
        </div>
    );
});

export default NumberComp;