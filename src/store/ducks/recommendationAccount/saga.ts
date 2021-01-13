import { put, takeEvery} from "redux-saga/effects";
import {LoadingState} from "./contracts/state";
import {
    RecommendationAccountsActionType,
    setRecommendationAccounts,
    setRecommendationAccountsLoadingState
} from "./actionCreators";
import firebase from "firebase";
import {db} from "../../../firebase";


export function* fetchRecommendationAccounts() {
    try {
        let info: firebase.firestore.DocumentData[] = []
        yield db.collection('recomendationUser').get().then((querySnapshot) =>
            querySnapshot.forEach(doc => info.push(doc.data())))

        yield put(setRecommendationAccounts(info))
    } catch (error) {
        yield put(setRecommendationAccountsLoadingState(LoadingState.ERROR))
    }
}

export function* recommendationAccountsSaga() {
    yield takeEvery(RecommendationAccountsActionType.FETCH_RECOMMENDATION_ACCOUNTS, fetchRecommendationAccounts)
}