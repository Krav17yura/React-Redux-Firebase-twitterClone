import {RootState} from "../../store";
import {AuthStatusState, User} from "./contracts/state";

export const selectAuthStatus = (state: RootState): AuthStatusState => state.auth.loadingState
export const selectUser = (state: RootState): User => state.auth.user