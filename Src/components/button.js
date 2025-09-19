// Componente de botón
class Button {
    constructor(text, onClick) {
        this.text = text;
        this.onClick = onClick;
    }

    render() {
        // Implementar renderizado del botón
        console.log('Rendering button:', this.text);
    }

    click() {
        if (this.onClick) {
            this.onClick();
        }
    }
}

export default Button;
