import {AuthState, AuthStatusState} from "./contracts/state";
import produce from "immer";
import {Draft} from "immer/dist/types/types-external";
import {AuthActions, AuthActionsType} from "./actionCreators";


const initialState: AuthState = {
    user: {
        _id: null,
        fullName: null,
        email: null,
        profilePhoto: null
    },
    loadingState: AuthStatusState.FALSE
}


export const authReducer = produce((draft: Draft<AuthState>, action: AuthActions) => {
    switch (action.type) {
        case AuthActionsType.SET_USER: {
            console.log(action.payload)
            draft.user = action.payload;
            draft.loadingState = AuthStatusState.TRUE;
            break
        }
        case AuthActionsType.APP_LOGIN: {
            draft.loadingState = AuthStatusState.PROCESS;
            break
        }
        case AuthActionsType.APP_LOGOUT: {
            draft.loadingState = AuthStatusState.FALSE;
            draft.user = {
                _id: null,
                fullName: null,
                email: null,
                profilePhoto: null
            }
            break
        }
        case AuthActionsType.SET_AUTH_LOADING_STATE: {
            draft.loadingState = action.payload;
            break
        }
        default: {
            break
        }
    }
}, initialState)