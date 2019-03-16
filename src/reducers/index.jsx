import { RECEIVE_DATA } from "../actions/index";

export default function reducer(state = { users: [], loading: true }, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                users: action.users,
                loading: false
            });

        default:
            return state;
    }
}
