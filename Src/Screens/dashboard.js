// Pantalla del dashboard
class Dashboard {
    constructor() {
        this.user = null;
        this.posts = [];
    }

    async loadDashboard() {
        // Implementar carga del dashboard
        console.log('Loading dashboard');
    }

    render() {
        // Implementar renderizado del dashboard
        console.log('Rendering dashboard');
    }

    updatePosts(posts) {
        this.posts = posts;
    }
}

export default Dashboard;
