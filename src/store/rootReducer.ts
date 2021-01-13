import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/reducer";
import {tagsReducer} from "./ducks/tags/reducer";
import {recommendationAccountsReducer} from "./ducks/recommendationAccount/reducer";
import {tweetReducer} from "./ducks/tweet/reducer";
import {authReducer} from "./ducks/auth/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
    recommendationAccounts: recommendationAccountsReducer,
    auth: authReducer,
});