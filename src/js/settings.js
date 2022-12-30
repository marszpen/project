
export const select = {
    temlateOf:{
        product: '#template-product',
        aboutSection: '#template-product , #template-section-about-us',
        contact: "template-contact",
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
        cards: '#page',
        home: '#home',
        products: '#product',
        menu: '#product-list',
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
};

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
        url: '//localhost:3131',
        products: 'products',
        home: 'home',
        contact: 'contact'
    }
}

export const templates = {
    product: Handlebars.compile(document.querySelector(select.templateOf.paroduct).innerHTML),
    home: Handlebars.compile(document.querySelector(select.templateOf.page).innerHTML),
    contact: Handlebars.compile(document.querySelector(select.templateOf.page).innerHTML),
};