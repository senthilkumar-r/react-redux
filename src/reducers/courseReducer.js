export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
        debugger;
            // state.push(action.course);
            // return state;
            //Or
            return [...state,
            Object.assign({}, action.course)
            ];
        default:
            return state;
    }

}