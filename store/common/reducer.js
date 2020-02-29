import initialState from "../initialState";
import * as types from "./types";
export default function commonReducer(state = initialState.common, action) {
    switch (action.type) {
        case types.TOGGLELOADER:
            return {
                ...state,
                showLoader: !state.showLoader
            };
        default:
            return state;
    }
}
