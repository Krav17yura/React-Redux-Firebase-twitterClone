import {RootState} from "../../store";
import {LoadingState} from "../tags/contracts/state";

export const selectRecommendationAccounts= (state: RootState) => state.recommendationAccounts
export const selectLoadingState = (state: RootState): LoadingState => selectRecommendationAccounts(state).loadingState
export const selectRecommendationAccountsItems = (state: RootState) => selectRecommendationAccounts(state).items
export const selectIsRecommendationAccountsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectIsRecommendationAccountsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED