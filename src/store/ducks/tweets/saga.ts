import {put, takeEvery, select} from 'redux-saga/effects'
import {
    addTweet,
    FetchAddTweetActionInterface, fetchTweets, setAddFormsLoadingState,
    setTweets,
    setTweetsLoadingState,
    TweetsActionsType
} from "./actionCreators";
import {AddFormState, LoadingState} from "./contracts/state";
import {db} from '../../../firebase';
import firebase from "firebase";

import {selectUser} from "../auth/selectors";


export function* fetchTweetsRequest() {
    try {
        let info: firebase.firestore.DocumentData[] = []
        yield db.collection('posts').orderBy('timestamp').get().then((querySnapshot) =>
            querySnapshot.forEach(doc => info.unshift(doc.data())))
        yield put(setTweets(info))

    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* addTweetRequest({payload}: FetchAddTweetActionInterface) {
    try {
        let user = yield select(selectUser)
        let item = {
            _id: Math.random().toString(36).substring(2),
            text: payload,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user
        }
        yield db.collection('posts').add(item)
        yield put(setAddFormsLoadingState(AddFormState.LOADED))
        yield put(addTweet(item))
        yield put(fetchTweets())
    } catch (error) {
        yield put(setAddFormsLoadingState(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, addTweetRequest)
}
