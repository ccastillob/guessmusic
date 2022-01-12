
import { types } from "../types/types";

const initialState = {
    modalEditOpen: false
}

export const uiReducer = ( state=initialState, action ) => {

    switch (action.type) {
        case types.uiOpenEditModal:
            return {
                ...state,
                modalEditOpen: true,
            }
        case types.uiCloseEditModal:
            return {
                ...state,
                modalEditOpen: false,
            }
        default:
            return state;
    }

}