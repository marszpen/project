
export const select = {
    temlateOf:{
        menuProduct: '#template-product',
        aboutSection: '#template-section-about-us',
    },
    nav:{
        links: '.main-nav a',
    },
    splash: {
        header: '#product__header',
        title: '#product__title',
        descrition: '#product__description',
    },
    containerOf: {
        cards: '#pages',
        home: '#home',
        products: '#products',
        menu: '.product-list',
        contact: '#contact',
    },
    selectionOf: {
        selection: '#product__selection',
        roasting: '#product__roasting',
        intensity: '#product__intensity'
    },
    aboutUs: {
        form: '#about__header',
        title: '.about__title',
        description: '.about__description',
        postscript: '.about__postscript'
    }
}

export const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.product.menuProduct).innerHTML),
};