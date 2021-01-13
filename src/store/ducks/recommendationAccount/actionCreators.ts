import {Action} from "redux";
import {LoadingState, RecommendationAccountsState} from "./contracts/state";
import firebase from "firebase";

export enum RecommendationAccountsActionType{
    SET_RECOMMENDATION_ACCOUNTS = 'recommendationAccounts/SET_RECOMMENDATION_ACCOUNTS',
    FETCH_RECOMMENDATION_ACCOUNTS = 'recommendationAccounts/FETCH_RECOMMENDATION_ACCOUNTS',
    SET_RECOMMENDATION_ACCOUNTS_LOADING_STATE = 'recommendationAccounts/SET_RECOMMENDATION_ACCOUNTS_LOADING_STATE'
}

//INTERFACE
export interface SetRecommendationAccountsActionInterface extends Action<RecommendationAccountsActionType>{
    type: RecommendationAccountsActionType.SET_RECOMMENDATION_ACCOUNTS,
    payload: RecommendationAccountsState['items']
}
export interface FetchRecommendationAccountsActionInterface extends Action<RecommendationAccountsActionType>{
    type: RecommendationAccountsActionType.FETCH_RECOMMENDATION_ACCOUNTS,

}
export interface SetRecommendationAccountsLoadingStateActionInterface extends Action<RecommendationAccountsActionType>{
    type: RecommendationAccountsActionType.SET_RECOMMENDATION_ACCOUNTS_LOADING_STATE,
    payload: LoadingState
}



// ACTIONS
export const setRecommendationAccounts = (payload: firebase.firestore.DocumentData[]): SetRecommendationAccountsActionInterface => <SetRecommendationAccountsActionInterface>({
    type: RecommendationAccountsActionType.SET_RECOMMENDATION_ACCOUNTS,
    payload,
})

export const fetchRecommendationAccounts = (): FetchRecommendationAccountsActionInterface => ({
    type: RecommendationAccountsActionType.FETCH_RECOMMENDATION_ACCOUNTS
})

export const setRecommendationAccountsLoadingState = (payload: LoadingState): SetRecommendationAccountsLoadingStateActionInterface => ({
    type: RecommendationAccountsActionType.SET_RECOMMENDATION_ACCOUNTS_LOADING_STATE,
    payload,
})

export type RecommendationAccountsActions = SetRecommendationAccountsActionInterface | FetchRecommendationAccountsActionInterface | SetRecommendationAccountsLoadingStateActionInterface
