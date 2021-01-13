import produce, {Draft} from 'immer'
import {LoadingState, RecommendationAccountsState} from "./contracts/state";
import {RecommendationAccountsActions, RecommendationAccountsActionType} from "./actionCreators";


const initialRecommendationAccountState: RecommendationAccountsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const recommendationAccountsReducer = produce((draft: Draft<RecommendationAccountsState>, action: RecommendationAccountsActions) => {
    switch (action.type) {
        case RecommendationAccountsActionType.SET_RECOMMENDATION_ACCOUNTS : {
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break
        }
        case  RecommendationAccountsActionType.FETCH_RECOMMENDATION_ACCOUNTS: {
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break
        }
        case RecommendationAccountsActionType.SET_RECOMMENDATION_ACCOUNTS_LOADING_STATE: {
            draft.loadingState = action.payload;
            break
        }
        default: {
            break
        }
    }

}, initialRecommendationAccountState)