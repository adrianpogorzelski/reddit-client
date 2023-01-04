import {createStore} from 'redux';

const initialState = []

const displayCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setSubreddit':
            return action.payload
        case 'subredditList':
            return action.payload
        default:
            return state
    }
}

export const store = createStore(displayCategoryReducer)

store.subscribe(() => {
    let newState = store.getState()
    let renderState = document.getElementById('storeRender')
    renderState.innerHTML = newState
})

