
import {RootState} from "../../store";
import {ITweetState, LoadingState} from "./contracts/state";

export const selectTweet = (state: RootState): ITweetState => state.tweet;

export const selectTweetItems = (state: RootState): ITweetState["data"] => selectTweet(state).data;

export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState;

export const selectTweetLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;