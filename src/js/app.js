'use strict';

import { select, classNames } from './settings.js'
import Product from './components/Product.js';

const app = {

    initPages: function(){
        const thisApp = this;
    
        thisApp.pages = document.querySelector(select.containerOf.cards).children;//kontener stron, dzięki .children znajdzie się id = home id = products id = contact
        thisApp.navLinks = document.querySelectorAll(select.nav.links);
        
        const idFromHash = window.location.hash.replace('#/', '');
        
        let pageMatchingHash = thisApp.pages[0].id;
    
        for(let page of thisApp.pages){
          if(page.id == idFromHash){
            pageMatchingHash = page.id;
            break;
          }
        }
    
        thisApp.activatePage(idFromHash);
    
        for (let link of thisApp.navLinks){
          link.addEventListener('click', function(event){
            const clickedElement = this;
            event.preventDefault;
    
            /*get page id from href attribute */
            const id = clickedElement.getAtribute('href').replace('#', '');
            /*run thisApp.activatePage wih that id */
            thisApp.activatePage(id);
    
          /*change URL hash */
          window.location.hash = '#/' + id;
          });
        }
      },
      
    activatePage: function(pageId){
        const thisApp = this;
    
        /*add class "active to matching pages, remove from non-matching" */
        for(let page of thisApp.pages){
        //if(page.id == pageId){
        //  page.classList.add(classNames.page.active);
        //}else{
        //  page.classList.remove(classNames.page.active);
        //}
        page.classList.toggle(classNames.page.active, page.id == pageId);
        }
        /*add class "active to matching links, remove from non-matching" */
        for(let link of thisApp.navLinks){
          link.classList.toggle(
            classNames.nav.active, 
            link.getAttribute('href') == '#' + pageId
            );
        }
      },

    initMenu: function(){
        const thisApp = this; 
        console.log('thisApp.data:', thisApp.data);
    
        for(let productData in thisApp.data.products){ 
          new Product (productData, thisApp.data.products[productData]);
        }
      },

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
        console.log('thisApp:', thisApp);
        thisApp.initData();
        thisApp.initPages();
    },
}

app.init();