import axios from "axios";

const API_KEY = "AIzaSyB8Uws7QwbAqjpgie8qTxNbetJ2k94zmgc";

export const authenticate = async (mode, email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    console.log(response.data);

    return response.data.idToken;
}

export const createUser = (email, password) => {
    return authenticate('signUp', email, password);
}

export const login = (email, password) => {
    return authenticate('signInWithPassword', email, password)
}
