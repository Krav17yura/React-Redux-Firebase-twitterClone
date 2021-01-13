
export enum AuthStatusState {
    TRUE = 'AUTH',
    FALSE = 'NOT AUTH',
    PROCESS = 'IN PROCESS',
    ERROR = 'ERROR',
}

export interface User {
    _id: string | undefined | null
    fullName: string | undefined | null;
    email: string | undefined | null;
    profilePhoto: string | undefined | null
}


export interface AuthState {
    user: User;
    loadingState: AuthStatusState,
}