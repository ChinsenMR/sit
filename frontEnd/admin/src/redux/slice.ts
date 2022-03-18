import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IListItem, pageState } from "../interface/types";
import { NAMESPACE } from '../interface/constants';
import initalState from './initalState';
export const initialState = {
    ...initalState,
};
const slice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        updateItem(state, action: PayloadAction<number>) {
            state.dataList[action.payload].age += 1;
        },
        updateFlag(state) {
            state.flag = !state.flag;
        },
    },
});
export const { updateItem, updateFlag } = slice.actions
export const { actions, reducer } = slice;
console.log(slice);