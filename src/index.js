import { User } from './api/economy/User/UserAPI.js'
let user_api = new User(123)

console.log(user_api.economy.bank.get())