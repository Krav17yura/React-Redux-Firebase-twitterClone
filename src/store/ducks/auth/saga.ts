import {put, takeEvery} from "redux-saga/effects";
import {
    AppLoginActionInterface,
    AppRegisterActionInterface,
    AuthActionsType,
    setAuthLoadingState, setUser
} from "./actionCreators";
import {AuthStatusState, User} from "./contracts/state";
import {auth} from "../../../firebase";


export function* appLoginRequest({payload}: AppLoginActionInterface) {
    try {
        let data: User = {_id: '', fullName: '', email: '', profilePhoto: ''}
        yield auth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(userAuth => {
                data = {
                    email: userAuth.user?.email,
                    _id: userAuth.user?.uid,
                    fullName: userAuth.user?.displayName,
                    profilePhoto: userAuth.user?.photoURL
                }
            })
            .catch(e => console.log(e))
        if (data._id) {
            yield put(setUser(data));
        }
    } catch (e) {
        yield put(setAuthLoadingState(AuthStatusState.ERROR))
    }
}


export function* appRegisterRequest({payload}: AppRegisterActionInterface) {
    try {
        yield  auth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then((userAuth) => {
                // @ts-ignore
                userAuth.user.updateProfile({
                    displayName: payload.fullName,
                    photoURL: payload.profilePhoto,
                });
            })
        console.log(payload)
    } catch (e) {
        console.log(e)
    }
}

export function* authSaga() {
    yield takeEvery(AuthActionsType.APP_LOGIN, appLoginRequest)
    yield takeEvery(AuthActionsType.APP_REGISTER, appRegisterRequest)
}