import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from '../../features/counter/counterSlice';

import styles from './ReduxExam1.module.css';

export default function ReduxExam1() {
    /* useSelector : Redux 스토어의 상태를 읽기 위한 React Redux Hook.
     * useDispatch : Redux 스토어에 액션을 dispatch 하기 위한 React Redux Hook.
     */
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    
    return (
        <div>
            <div className={styles.row}>
                <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>+</button>
                <span className={styles.value}>{count}</span>
                <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>-</button>
            </div>

            <div className={styles.row}>
                <input className={styles.textbox} aria-label="Set increment amount" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
                <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
                <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Add Async</button>
            </div>
        </div>
    );
};