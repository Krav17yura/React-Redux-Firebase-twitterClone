import {RootState} from "../../store";
import {LoadingState} from "./contracts/state";

export const selectTags= (state: RootState) => state.tags
export const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState
export const selectTagsItems = (state: RootState) => selectTags(state).items
export const selectIsTagsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectIsTagsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

