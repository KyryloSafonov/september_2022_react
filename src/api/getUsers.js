export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
}

export const getUser = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => resp.json());
}
