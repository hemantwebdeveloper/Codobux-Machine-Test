import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'

//Step 1
const combinedReducer = combineReducers({
    user: userSlice,
});

//Step 2
const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = {};
    }
    return combinedReducer(state, action);
};

//Step 3 
export const store = configureStore({
    reducer: rootReducer
});