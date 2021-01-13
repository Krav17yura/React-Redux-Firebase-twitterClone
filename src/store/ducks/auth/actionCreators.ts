import {Action} from "redux";
import {AuthStatusState, User} from "./contracts/state";


export enum AuthActionsType {
    APP_LOGIN = 'auth/APP_LOGIN',
    APP_REGISTER = 'auth/APP_REGISTER',
    APP_LOGOUT = 'auth/APP_LOGOUT',
    SET_USER = 'auth/SET_USER',
    SET_AUTH_LOADING_STATE = 'tweets/SET_AUTH_LOADING_STATE',
}


export interface AppLoginActionInterface extends Action<AuthActionsType> {
    type: AuthActionsType.APP_LOGIN,
    payload: any
}

export interface AppRegisterActionInterface extends Action<AuthActionsType> {
    type: AuthActionsType.APP_REGISTER,
    payload: any
}

export interface AppLogoutActionInterface extends Action<AuthActionsType> {
    type: AuthActionsType.APP_LOGOUT
}

export interface SetUserActionInterface extends Action<AuthActionsType> {
    type: AuthActionsType.SET_USER
    payload: User
}

export interface SetAuthLoadingStateActionInterface extends Action<AuthActionsType> {
    type: AuthActionsType.SET_AUTH_LOADING_STATE
    payload: AuthStatusState
}

export const appLogin = (payload: any): AppLoginActionInterface => ({
    type: AuthActionsType.APP_LOGIN,
    payload
})

export const appRegister = (payload: any): AppRegisterActionInterface => ({
    type: AuthActionsType.APP_REGISTER,
    payload
})

export const appLogout = (): AppLogoutActionInterface => ({
    type: AuthActionsType.APP_LOGOUT
})

export const setAuthLoadingState = (payload: AuthStatusState): SetAuthLoadingStateActionInterface => ({
    type: AuthActionsType.SET_AUTH_LOADING_STATE,
    payload
})

export const setUser = (payload: User): SetUserActionInterface => ({
    type: AuthActionsType.SET_USER,
    payload
})


export type AuthActions =
    AppLoginActionInterface |
    AppLogoutActionInterface |
    SetUserActionInterface |
    SetAuthLoadingStateActionInterface |
    AppRegisterActionInterface



