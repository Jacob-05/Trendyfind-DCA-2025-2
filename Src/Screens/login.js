// Pantalla de login
class Login {
    constructor() {
        this.email = '';
        this.password = '';
    }

    handleEmailChange(email) {
        this.email = email;
    }

    handlePasswordChange(password) {
        this.password = password;
    }

    async handleLogin() {
        // Implementar lógica de login
        console.log('Login attempt:', this.email);
    }

    render() {
        // Implementar renderizado del login
        console.log('Rendering login screen');
    }
}

export default Login;
