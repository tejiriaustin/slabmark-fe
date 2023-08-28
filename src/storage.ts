import {setCookie, getCookie, deleteCookie} from "cookies-next";

const AUTH_TOKEN_KEY = '@auth-token'

export function getToken() {
    return getCookie(AUTH_TOKEN_KEY)
}

export function setToken(token: string) {
    setCookie(AUTH_TOKEN_KEY, token)
}

export function deleteToken() {
    deleteCookie(AUTH_TOKEN_KEY)
}