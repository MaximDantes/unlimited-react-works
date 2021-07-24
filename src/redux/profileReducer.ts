import {profileApi} from '../api/api'
import { TProfileInfo } from '../types/types'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TState} from './store'

type TPost = {
    id: number,
    avatar: string,
    text: string
}
type TInitialState = {
    postsData: TPost[],
    profileInfoData: TProfileInfo | null,
    status: string | null,
    isFetching: boolean,
}
type TAddPostAction = {
    type: typeof actionTypes.addPost,
    text: string
}
type TSetProfileAction = {
    type: typeof actionTypes.setProfile,
    profileInfo: any
}
type TSetStatusAction = {
    type: typeof actionTypes.setStatus,
    status: string
}
type TToggleFetchingAction = {
    type: typeof actionTypes.toggleFetching,
    isFetching: boolean
}
type TDeletePostAction = {
    type: typeof actionTypes.deletePost,
    postId: number
}
type TActions = TAddPostAction | TSetProfileAction | TSetStatusAction | TToggleFetchingAction | TDeletePostAction

type TThunkResult<T> = ThunkAction<T, TState, undefined, TActions>


const actionTypes = {
    addPost: 'profile/ADD_POST',
    setProfile: 'profile/SET_PROFILE',
    setStatus: 'profile/SET_STATUS',
    toggleFetching: 'profile/TOGGLE_FETCHING',
    deletePost: 'profile/tDELETE_POST'
}

const initialState: TInitialState = {
    postsData: [
        {
            id: 1,
            avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album',
            text: 'I know that my redemeer lives and that in the end he will stand up on the Earth'
        },
        {
            id: 2,
            avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album',
            text: 'And after my skeen has been destroyed, yet in my flash I will see God.'
        },
        {
            id: 3,
            avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album',
            text: 'I myself will see him with my own eyes I and now another How my heart yearns within me Amen If you say how we will hound him scince the root of the troubles lives in him you should fear the sword yourself For wrath will bring punishment by the sword And them you will know that there is judment'
        }
    ],
    profileInfoData: null,
    status: null,
    isFetching: true,
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.addPost:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 4,
                    avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album',
                    text: action.text
                }],
                newPostText: ''
            }

        case actionTypes.setProfile:
            return {
                ...state,
                profileInfoData: action.profileInfo
            }

        case actionTypes.setStatus:
            return {
                ...state,
                status: action.status
            }

        case actionTypes.toggleFetching:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case actionTypes.deletePost:
            return {
                ...state,
                postsData: state.postsData.filter(x => x.id != action.postId)
            }

        default:
            return state
    }
}


export const addPost = (text: string): TAddPostAction => ({
    type: actionTypes.addPost,
    text
})

export const setProfile = (profileInfo: any): TSetProfileAction => ({
    type: actionTypes.setProfile,
    profileInfo
})

export const setStatus = (status: string): TSetStatusAction => ({
    type: actionTypes.setStatus,
    status,
})

export const toggleFetching = (isFetching: boolean): TToggleFetchingAction => ({
    type: actionTypes.toggleFetching,
    isFetching
})

export const deletePost = (postId: number): TDeletePostAction => ({
    type: actionTypes.deletePost,
    postId
})


export const getProfile = (id: number): TThunkResult<void> => async (dispatch) => {
    dispatch(toggleFetching(true))

    const response = await profileApi.getProfile(id)

    dispatch(setProfile(response))
    dispatch(toggleFetching(false))
}

export const getStatus = (id: number): TThunkResult<void> => async (dispatch) => {
    const response = await profileApi.getStatus(id)
    dispatch(setStatus(response))
}

export const updateStatus = (status: string): TThunkResult<void> => async (dispatch) => {
    await profileApi.updateStatus(status)
    dispatch(setStatus(status))
}