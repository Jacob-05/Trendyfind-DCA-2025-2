// Servicios de usuario
class UserService {
    constructor() {
        this.baseURL = 'http://localhost:3000/api';
    }

    async getUserProfile(userId) {
        // Implementar obtención de perfil de usuario
        console.log('Getting user profile:', userId);
    }

    async updateUserProfile(userId, userData) {
        // Implementar actualización de perfil
        console.log('Updating user profile:', userId, userData);
    }

    async deleteUser(userId) {
        // Implementar eliminación de usuario
        console.log('Deleting user:', userId);
    }
}

export default new UserService();
