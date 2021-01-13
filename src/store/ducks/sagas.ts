import {all} from 'redux-saga/effects'
import {tweetsSaga} from "./tweets/saga";
import {tagsSaga} from "./tags/saga";
import {recommendationAccountsSaga} from "./recommendationAccount/saga";
import { tweetSags } from './tweet/saga';
import {authSaga} from "./auth/saga";


export default function* rootSaga(){
    yield all([
        recommendationAccountsSaga(),
        tweetsSaga(),
        tagsSaga(),
        tweetSags(),
        authSaga()
    ])
}