// Pantalla de registro
class Register {
    constructor() {
        this.formData = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleInputChange(field, value) {
        this.formData[field] = value;
    }

    async handleRegister() {
        // Implementar lógica de registro
        console.log('Register attempt:', this.formData);
    }

    render() {
        // Implementar renderizado del registro
        console.log('Rendering register screen');
    }
}

export default Register;
