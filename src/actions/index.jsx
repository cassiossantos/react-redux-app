export const RECEIVE_DATA = "RECEIVE_DATA";

export function receiveData(users) {
    return {
        type: RECEIVE_DATA,
        users: users
    };
}

export function fetchData() {
    return function(dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json(), error => console.log(error))
            .then(json => {
                dispatch(receiveData(json));
            });
    };
}
