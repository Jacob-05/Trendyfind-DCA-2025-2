// Utilidades de publicación
class Publish {
    static formatDate(date) {
        return new Date(date).toLocaleDateString('es-ES');
    }

    static truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    static generateSlug(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    static validatePostData(postData) {
        const errors = [];
        
        if (!postData.title || postData.title.trim().length < 5) {
            errors.push('El título debe tener al menos 5 caracteres');
        }
        
        if (!postData.content || postData.content.trim().length < 10) {
            errors.push('El contenido debe tener al menos 10 caracteres');
        }
        
        return errors;
    }
}

export default Publish;
