// Componente de pop-up
class PopUp {
    constructor() {
        this.isVisible = false;
    }

    show() {
        this.isVisible = true;
        console.log('Showing pop-up');
    }

    hide() {
        this.isVisible = false;
        console.log('Hiding pop-up');
    }

    render() {
        // Implementar renderizado del pop-up
        console.log('Rendering pop-up');
    }
}

export default PopUp;
