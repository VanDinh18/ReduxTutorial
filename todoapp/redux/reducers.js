export const counter_reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const initialState = {
    todo_list: []
};

export const todos_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo_list: [...state.todo_list, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todo_list: state.todo_list.filter(
                    (todo) => todo.id != action.payload.id
                )
            }
        default:
            return state
    }
}