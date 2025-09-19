// Componente de barra de acciones
class ActionBar {
    constructor() {
        this.actions = [];
    }

    addAction(action) {
        this.actions.push(action);
    }

    render() {
        // Implementar renderizado de la barra de acciones
        console.log('Rendering action bar');
    }
}

export default ActionBar;
