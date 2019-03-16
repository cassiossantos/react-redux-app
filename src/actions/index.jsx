export const MOSTRAR = "MOSTRAR";
export const LOADING = "LOADING";
export const RECEIVE_DATA = "RECEIVE_DATA";

export function display() {
    return {
        type: MOSTRAR
    };
}

export function loading() {
    return {
        type: LOADING
    };
}

export function receiveData() {
    return {
        type: RECEIVE_DATA
    };
}

export function fetchData() {
    return function(dispatch) {
        dispatch(loading());

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(receiveData());
            });
    };
}
