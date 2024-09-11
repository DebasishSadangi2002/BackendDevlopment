const register =(username) =>{
    console.log(`Welcome ${username}`)
}

const login =(username, password) =>{
    console.log(`${username} logged in`);
    
}

module.exports = {register, login}