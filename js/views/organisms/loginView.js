import { clearToken } from "../../services/auth.js"
import { Button, Form, Paragraph } from "../atoms/index.js"
import { FormGroup } from "../molecules/index.js"

export const LoginFormView = () => {
    const form = Form('POST')
    const username = FormGroup('Brugernavn', 'username', 'Indtast dit brugernavn', 'text')
    const password = FormGroup('Adgangskode', 'password', 'Indtast din adgangskode', 'password')
    const button = Button('Log ind', 'submit')
    form.append(username, password, button)
    return form
}

export const UserInfoView = (user) => {
    const el = Paragraph()
    el.innerText = `Velkommen ${user.firstname} ${user.lastname}`
    const button = Button('Log ud', 'button')
    button.addEventListener('click', () => {
        clearToken()
    })
    el.appendChild(button)
    return el
}