import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";
import EditorSlice from "./EditorSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer:{
        form: FormSlice,
        editor: EditorSlice,
        user: UserSlice
    }
})

export default store;