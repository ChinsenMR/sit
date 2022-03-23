import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { NAMESPACE } from '@/constants';
import { RouteTypes } from '@/types/types'
import initalState from './initalState';
export const initialState = {
    ...initalState,
};

const slice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        routeChange(state: any, action: PayloadAction<RouteTypes[]>) {
            state.global.routes = [...action.payload];
        },
        showLoading(state, action: PayloadAction<boolean>) {
            state.global.loading = action.payload
        },
        setUserInfo(state: any, action: PayloadAction<UserInfoProps>) {
            state.global.userInfo = { ...action.payload }
        },
    },
});
export const { routeChange, showLoading, setUserInfo } = slice.actions
export const { actions, reducer } = slice;
export const selectRoute = (state: any) => state.global.routes;
export const selectLoading = (state: any) => state.global.loading
export const selectUserInfo = (state: any) => state.global.userInfo
