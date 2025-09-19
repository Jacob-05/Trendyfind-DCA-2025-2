// Pantalla de agregar post
class AddPost {
    constructor() {
        this.postData = {
            title: '',
            content: '',
            image: null,
            tags: []
        };
    }

    handleInputChange(field, value) {
        this.postData[field] = value;
    }

    handleImageUpload(image) {
        this.postData.image = image;
    }

    async publishPost() {
        // Implementar publicación de post
        console.log('Publishing post:', this.postData);
    }

    render() {
        // Implementar renderizado de agregar post
        console.log('Rendering add post screen');
    }
}

export default AddPost;
