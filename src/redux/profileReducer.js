const actionTypes = {
    addPost: 'ADD_POST',
    writeNewPost: 'WRITE_NEW_POST',
};

const initialState = {
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
    profileInfoData: {
        id: 1,
        firstName: 'Archer',
        surname: 'Archer',
        status: 'dead inside',
        dateOfBirth: '30.03.1986',
        religion: 'ornitarionism',
        avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album',
        topImg: 'http://i.imgur.com/wYuJwNi.jpg'
    },
    newPostText: '',
};


export const profileReducer = (state = initialState, action) => {

    const addPost = () => {
        state.postsData.push({
            id: 4,
            avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album',
            text: state.newPostText
        });

        state.newPostText = '';
    };
    const writeNewPost = text => {
        state.newPostText = text;
    };

    switch (action.type) {
        case actionTypes.addPost:
            addPost();
            return state;

        case actionTypes.writeNewPost:
            writeNewPost(action.text);
            return state;

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: actionTypes.addPost
});
export const writeNewPostActionCreator = text => ({
    type: actionTypes.writeNewPost,
    text: text
});