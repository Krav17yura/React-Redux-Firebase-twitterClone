import {put, takeEvery} from 'redux-saga/effects'
import {setTweetData, setTweetDataLoadingState} from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {IFetchTweetDataAction, TweetDataActionsType} from "./actionCreators";
import {Tweet} from "../tweets/contracts/state";
import {db} from "../../../firebase";

export function* fetchTweetDataSaga({payload: id}: IFetchTweetDataAction) {
    try {
        let info: Tweet[] = []
        yield db.collection('posts').get().then((querySnapshot) =>
            querySnapshot.forEach(doc => doc.data()._id === id ? info.push(<Tweet>doc.data()) : null))
        console.log(info[0])
        yield put(setTweetData(info[0]));
    } catch (e) {
        yield put(setTweetDataLoadingState(LoadingState.ERROR));
    }
}

export function* tweetSags() {
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataSaga)
}