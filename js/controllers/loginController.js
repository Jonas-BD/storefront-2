import { Authenticate } from "../models/loginModel.js"
import { getToken, setToken } from "../services/auth.js"
import { LoginFormView, UserInfoView } from "../views/organisms/loginView.js"
import { Layout } from "./layoutController.js"

export const LoginPage = () => {
    if (getToken()) {
        const token = getToken()
        const html = UserInfoView(token.user)
        return Layout('Din side', html)
    } else {
        const el = LoginFormView()

        el.addEventListener('submit', async (e) => {
            loginHandler(e)
        })
        return Layout('Log ind', el)
    }
}

const loginHandler = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    const username = form.username.value.trim()
    const password = form.password.value.trim()

    if (username && password) {
        const data = await Authenticate(username, password)

        if (data.accessToken) {
            setToken(data)
            location.href = "./index.htm"
        }
    }
}