import { data } from './errors/data';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const textRegex = /^[а-яА-ЯёЁ\s]+$|^[a-zA-Z\s]+$/;

export const phoneRegex = /^\+?[0-9\s-]{10,15}$/;

export const numberRegex = /^[0-9]+$/;

export const valid = {
    'idRegex': /^[a-f0-9]{24}$/,
    'numberRegex': /^[0-9]+$/
}

export const validatePassword = (password) => {
    if (!password) {
        return data.required;
    }
    if (password.length < 8) {
        return data.errors.passwordTooShort;
    }
    if (!/[a-z]/.test(password)) {
        return data.errors.passwordMissingLowercase;
    }
    if (!/[A-Z]/.test(password)) {
        return data.errors.passwordMissingUppercase;
    }
    if (!/\d/.test(password)) {
        return data.errors.passwordMissingDigit;
    }
    return null; 
};

