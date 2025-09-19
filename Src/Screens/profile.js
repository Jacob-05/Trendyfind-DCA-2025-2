// Pantalla de perfil
class Profile {
    constructor() {
        this.user = null;
        this.userPosts = [];
    }

    async loadProfile(userId) {
        // Implementar carga del perfil
        console.log('Loading profile for user:', userId);
    }

    render() {
        // Implementar renderizado del perfil
        console.log('Rendering profile screen');
    }

    updateUserData(userData) {
        this.user = userData;
    }
}

export default Profile;
