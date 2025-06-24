import type {TypeUser} from "../../types.ts";
import {userLoginUrl} from "../../sourse/url.ts";
import {openClosePopUp} from "../../functions/open-pup.ts";

async function requestLogin(data: TypeUser): Promise<boolean> {
    try {
        const response:Response = await fetch(userLoginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });


        const result = await response.json();

        console.log(result)
        return true
    } catch (error) {
        console.error('Помилка запиту авторизації:', error);
        return false;
    }
}
export async function handlerLogin(setIsAuth: (val: boolean) => void): Promise<boolean | null> {
    const emailElement = document.getElementById('login-email') as HTMLInputElement | null;
    const passElement = document.getElementById('login-password') as HTMLInputElement | null;

    if (!emailElement || !passElement) {
        console.error('Елементи форми не знайдено');
        return null;
    }

    const email = emailElement.value.trim();
    const password = passElement.value.trim();

    if (!email || !password) {
        console.warn('Email або пароль порожні');
        return null;
    }

    const result = await requestLogin({ email, password });

    if (result) {
        openClosePopUp('pup-login')
        setIsAuth(true);
        console.log('Авторизація успішна');
    } else {
        console.warn('Невірний email або пароль');
    }

    return result;
}
