// Servicios de autenticación
class AuthService {
    constructor() {
        this.baseURL = 'http://localhost:3000/api';
    }

    async login(email, password) {
        // Implementar lógica de login
        console.log('Login attempt:', email);
    }

    async register(userData) {
        // Implementar lógica de registro
        console.log('Register attempt:', userData);
    }

    async logout() {
        // Implementar lógica de logout
        console.log('Logout');
    }
}

export default new AuthService();
