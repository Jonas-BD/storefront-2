import { clearToken } from "../../services/auth.js"
import { Button, Form, Paragraph } from "../atoms/index.js"
import { FormGroup } from "../molecules/index.js"

export const LoginFormView = () => {
    const form = Form('POST')
    const username = FormGroup('Brugernavn', 'username', 'Indtast dit brugernavn', 'text')
    const password = FormGroup('Adgangskode', 'password', 'Indtast din adgangskode', 'password')
    const button = Button('Log ind', 'submit', 'bg-green-500 p-1 pl-4 pr-4 text-white border rounded hover:bg-green-600')
    form.append(username, password, button)
    return form
}

export const UserInfoView = (user) => {
    const el = Paragraph()
    el.innerText = `Velkommen ${user.firstname} ${user.lastname}`
    const button = Button('Log ud', 'button', 'bg-red-600 text-white hover:bg-red-700 p-1 pl-4 pr-4 ml-4 rounded')
    button.addEventListener('click', () => {
        clearToken()
    })
    el.appendChild(button)
    return el
}