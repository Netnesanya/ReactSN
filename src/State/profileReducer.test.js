import {addPostActionCreator, profileReducer, deletePost} from "./profileReducer";

let state = {
    postData: [{id: 1, message: "post Number 1", likes: 2}, {id: 2, message: "post Number 2", likes: 12}, {
        id: 3, message: "post Number 3", likes: 52
    }, {id: 4, message: "post Number 4", likes: 34},], newPostText: "What's new?",
}

it ('new post should be added', () => {
    let action = addPostActionCreator('test passed')
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(5)
    expect(newState.postData[4].message).toBe('test passed')
})
it ('target post should be deleted', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(3)
})

