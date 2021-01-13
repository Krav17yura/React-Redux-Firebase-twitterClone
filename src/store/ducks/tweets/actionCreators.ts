import {AddFormState, LoadingState, TweetsState} from "./contracts/state";
import {Action} from "redux";
import firebase from "firebase";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_TWEETS_LOADING_STATE = 'tweets/SET_TWEETS_LOADING_STATE',
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_ADD_FORM_LOADING = 'tweets/SET_ADD_FORM_LOADING'
}

// INTERFACE
export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS,
    payload: TweetsState['items']

}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload: string
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET,
    payload: { _id: string; text: string; user: { avatarUrl: string; fullName: string; userName: string }; timestamp: firebase.firestore.FieldValue }
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS_LOADING_STATE,
    payload: LoadingState
}

export interface SetAddFormLoadingStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_LOADING,
    payload: AddFormState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS,
}


// ACTIONS
export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})

export const addTweet = (payload: { _id: string; text: string; user: { avatarUrl: string; fullName: string; userName: string }; timestamp: firebase.firestore.FieldValue }): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_TWEETS_LOADING_STATE,
    payload,
});

export const setAddFormsLoadingState = (payload: AddFormState): SetAddFormLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_LOADING,
    payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});


export type TweetsActions =
    SetTweetsActionInterface |
    SetTweetsLoadingStateActionInterface |
    FetchTweetsActionInterface |
    FetchAddTweetActionInterface |
    AddTweetActionInterface |
    SetAddFormLoadingStateActionInterface