import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    // @reduxjs/toolkit에서 제공하는 configureStore를 가지고 Redux store를 생성한다.
    reducer: {
        // store.js에 Reducer 추가.
        counter: counterReducer,
    },
});