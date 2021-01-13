import {put, takeEvery} from 'redux-saga/effects'
import {setTags, setTagsLoadingState, TagsActionsType} from "./actionCreators";
import {LoadingState} from "./contracts/state";
import firebase from "firebase";
import {db} from "../../../firebase";

export function* fetchTagsRequest() {
    try {
        let info: firebase.firestore.DocumentData[] = []
        yield db.collection('tags').get().then((querySnapshot) =>
            querySnapshot.forEach(doc => info.push(doc.data())))

        yield put(setTags(info))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}
