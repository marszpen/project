
export const select = {
    product: {
        menuProduct: '#template-product',
        header: '#product__header',
        title: '#product__title',
        descrition: '#product__description',
    },
    containerOf: {
        menu: '#product-list',
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