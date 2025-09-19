// Utilidades de validación
class Validation {
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validatePassword(password) {
        // Mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    static validateName(name) {
        return name && name.trim().length >= 2;
    }

    static validateRequired(value) {
        return value && value.trim().length > 0;
    }
}

export default Validation;
