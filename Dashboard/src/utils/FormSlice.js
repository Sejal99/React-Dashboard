import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name: "form",
    initialState: {
        userObject: {
            userId: '',
            name: '',
            address: '',
            email: '',
            phone: '',
            unsavedChanges: false,
        }
    },
    reducers: {
        setFormData: (state, action) => {
            state.userObject = {
                ...state.userObject,
                ...action.payload,
                unsavedChanges: true,
            };
        },
        clearFormData: (state) => {
            state.userObject = {
                text: '',
                userId: '',
                name: '',
                address: '',
                email: '',
                phone: '',
                unsavedChanges: false,
            };
        },
        setUnsavedChanges: (state, action) => {
            state.userObject.unsavedChanges = action.payload;
        }
    }
});

export const { setFormData, clearFormData, setUnsavedChanges } = FormSlice.actions;
export default FormSlice.reducer;
