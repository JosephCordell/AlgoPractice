const localStorage = {userKey: 'User', tokenKey: 'Token', userTypeKey: 'User'}
const stringify = JSON.stringify(localStorage)


Object.keys(localStorage).map((key) => console.log(localStorage[key]))