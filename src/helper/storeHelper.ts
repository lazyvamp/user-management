import store from "../store/Store";

export const dispatcher = (actionType: string, payload: any) => {
    store.dispatch({
        type: actionType,
        payload: payload
    })
}