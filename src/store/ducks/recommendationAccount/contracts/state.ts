export enum LoadingState{
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface RecommendationAccounts {
    _id: string,
    fullName: string,
    userName: string,
    avatarUrl: string
}

export interface RecommendationAccountsState{
    items: RecommendationAccounts[];
    loadingState: LoadingState
}

