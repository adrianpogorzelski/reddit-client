import {createStore} from 'redux';
import {fetchRedditData} from "../features/fetch";

const initialState = {
    filtersVisibile: false,
    filters: [],
    contentLoading: true,
    content: {}
}

const displayCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setSubreddit':
            return action.payload
        default:
            return state
    }
}

export const store = createStore(displayCategoryReducer)

/*store.subscribe(() => {
    let newState = store.getState()
    let renderState = document.getElementById('storeRender')
    const setContent = async () => {
        renderState.innerHTML = await fetchRedditData(newState)
    }
    setContent()
})*/

