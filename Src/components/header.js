// Componente de encabezado
class Header {
    constructor() {
        this.title = 'TrendyFind';
    }

    render() {
        // Implementar renderizado del header
        console.log('Rendering header');
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }
}

export default Header;
