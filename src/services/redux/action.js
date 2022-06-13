export const deleteTodoAction = (dispatch) => (id) =>
dispatch ({
    type: 'DELETE_TODO',
    payload: id,
});

export const toogleCompleteAction = (dispatch) => (id) =>
dispatch({
    type: 'TOOGLE_COMPLETED_TODO',
    payload: id,
});