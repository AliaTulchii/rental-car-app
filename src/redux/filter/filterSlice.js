import { createSlice } from "@reduxjs/toolkit";



export  const filterSlice = createSlice({

    name: 'filter',
    initialState: {
     filter: null
    },
    reducers: {
        showFilter(state, action) {
        state.filter = action.payload
      },
       
}

})

export const {showFilter}  = filterSlice.actions
export const filterReducer = filterSlice.reducer