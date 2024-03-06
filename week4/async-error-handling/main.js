const API_URL = 'https://jsonplaceholder.typicode.com'

function getUserByIdAndUsername(id, username) {
  return fetch(`${API_URL}/users/${id}`).then(res => {
    if (res.status === 404) {
      throw new Error(`Could not find a user with id ${id}`)
    }
    if (res.status !== 200) {
      return Promise.reject(new Error(`balblabla a user with id ${id}`))
    } else {

    }
  })
}
