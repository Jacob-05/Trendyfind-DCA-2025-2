// Archivo principal de la aplicación
import Dashboard from './Src/Screens/dashboard.js';
import Login from './Src/Screens/login.js';
import Register from './Src/Screens/register.js';
import Profile from './Src/Screens/profile.js';
import ProfileSettings from './Src/Screens/profile-settings.js';
import AddPost from './Src/Screens/add-post.js';

class App {
    constructor() {
        this.currentScreen = 'login';
        this.screens = {
            dashboard: new Dashboard(),
            login: new Login(),
            register: new Register(),
            profile: new Profile(),
            profileSettings: new ProfileSettings(),
            addPost: new AddPost()
        };
    }

    init() {
        console.log('Inicializando TrendyFind App');
        this.render();
    }

    navigateTo(screenName) {
        if (this.screens[screenName]) {
            this.currentScreen = screenName;
            this.render();
        }
    }

    render() {
        console.log('Renderizando pantalla:', this.currentScreen);
        if (this.screens[this.currentScreen]) {
            this.screens[this.currentScreen].render();
        }
    }
}

// Inicializar la aplicación
const app = new App();
app.init();

export default App;
