'use strict';

import { settings } from './settings.js'


class Product {
    constructor (id) {
        const thisProduct = this;

        thisProduct.id = id;
    }
    
    getElements(){
        thisProduct.products = thisProduct.element.querySelektor(settings.title).innerHTML;
    }

    initOrder(){
        const thisProduct = this;

        thisProduct.elemement.addEventListener('click', function(){

        })
    }

}
const app = {
    initData: function() {
        const url = settings.db.url + '/' + settings.db.products;
        this.data = {};
        fetch(url)
            .then((rawResponse) => {
                return rawResponse.json();
            })
            .then((parsedResponse) => {
                this.data.products = parsedResponse;
            });
    },

    init: function() {
        const thisApp = this;
        thisApp.initData();
    },
}

app.init();