import * as actionTypes from "./actions";

const initailState = {
    counter: 0
}

const reducer = (state = initailState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ONE:
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state;
    }
}