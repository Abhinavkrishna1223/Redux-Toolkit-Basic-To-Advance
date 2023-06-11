import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../actions/Action";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            // console.log(action.payload)

        },

        removeUser(state, action) {
            //console.log('hi' + action.payload);

            state.splice(action.payload, 1);  // Here in state.splice(index, no. of data to be deleted ) 1 passed so user deleted 1, if 2   then 2 will be deleted onclick //
        },

        // deleteUser(state, action) {
        //     // console.log('Hi delete');

        //     return [];

        // }    //There is no use of this reducer if action method is defined earlier and passed in extraReducer //
        // ,
    },

    extraReducers(builder) {
        builder.addCase(deleteUser, () => {
            return [];
        })
    }
});

// If action is supposed to be handled by one reducer, use reducers.

// If action is supposed to be handled by Multiple reducers, use ExtraReducer. 

// Note --> for extraReducer, you have to define the reducerType(deleteUser) in reducers //



console.warn(userSlice.actions);

export default userSlice;

export const { addUser, removeUser } = userSlice.actions;