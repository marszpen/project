
export const select = {
    templateOf:{
        product: '#template-product',
        home: '#template-home',
        contact: "#template-contact",
    },
    nav:{
        links: '.main-nav a',
        homeHeader: '.container',
    },
    splash: {
        header: '#product__header',
        title: '#product__title',
        descrition: '#product__description',
    },
    containerOf: {
        cards: '#pages',
        home: '#home',
        products: '#product',
        menu: '.products-list',
        contact: '#contact',
        homeWrapper: '.home-wrapper',
        contactWrapper: '.contact-wrapper',
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

export const classNames = {
    nav: {
        active: 'active'
    },
    page: {
        active: 'active'
    }
}

export const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
        products: 'products',
    }
}

export const templates = {
    product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
    home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
    contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
};