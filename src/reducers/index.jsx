import { MOSTRAR } from "../actions/index";

export default function reducer(
    state = {
        users: [],
        loading: true
    },
    action
) {
    switch (action.type) {
        case MOSTRAR:
            console.log("hello world!");
            return "hello world";

        default:
            return state;
    }
}
