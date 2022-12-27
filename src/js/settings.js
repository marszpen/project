
export const select = {
    splash: {
        menuProduct: '#template-product',
        header: '#product__header',
        title: '#product__title',
        descrition: '#product__description',
    },
    containerOf: {
        cards: '#pages',
        home: '#home',
        products: '#products',
        contact: '#contact'
    },
    selectionOf: {
        selection: '#product__selection',
        roasting: '#product__roasting',
        intensity: '#product__intensity'
    },

    aboutUs: {
        form: '#about__header',
        title: '#about__title',
        description: '#about__description'
    }
}

export const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.product.menuProduct).innerHTML),
};