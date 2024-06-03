import { createSlice } from "@reduxjs/toolkit";

const EditorSlice = createSlice({
    name:"editor",
    initialState:{
        text:'',
        unsavedChanges: false,
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
            state.unsavedChanges = true;
        },
        setUnsavedChanges: (state, action) => {
            state.unsavedChanges = action.payload;
        }
    }
})

export const {setText, setUnsavedChanges} = EditorSlice.actions;
export default EditorSlice.reducer;