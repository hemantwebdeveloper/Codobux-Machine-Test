import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile:{},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAction: (state, action) => {
            return { ...state, ...action.payload }
        }
    },
})

// Action creators are generated for each case reducer function
export const { userAction } = userSlice.actions

export default userSlice.reducer;