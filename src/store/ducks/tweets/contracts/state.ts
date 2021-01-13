import {User} from "../../auth/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}


export enum AddFormState{
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export interface Tweet {
    _id: string
    text: string;
    timestamp: any;
    user: User
}

export interface TweetsState {
    items: any;
    loadingState: LoadingState,
    addFormState: AddFormState
}