import axios from "axios";

const API_KEY = "AIzaSyB8Uws7QwbAqjpgie8qTxNbetJ2k94zmgc";

const createUser = async (email, password) => {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    })
}
