import {RootState} from "../../store";
import {AddFormState, LoadingState} from "./contracts/state";

export const selectTweets = (state: RootState) => state.tweets
export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState
export const selectAddFormState = (state: RootState): AddFormState => selectTweets(state).addFormState
export const selectTweetsItems = (state: RootState) => selectTweets(state).items
export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectIsTweetsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

