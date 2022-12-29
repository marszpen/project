import {select} from './setting.js';
import utils from './utils.js';

class Product {
    constructor (id,data) {
        const thisProduct = this;

        thisProduct.id = id;
        thisProduct.data = data;

        thisProduct.initCard();
    }

    renderInMenu(){
        const thisProduct = this;//renderowanie produktów na stronie
  
        /* generate HTML based on template */
        const generatedHTML = templates.menuProduct(thisProduct.data);
        //console.log(this);
        /* create element using utils.createElementFromHTML -tworzenie lementu DOM*/ 
        thisProduct.element = utils.createDOMFromHTML(generatedHTML);
        /* find menu container */
        const menuContainer = document.querySelector(select.containerOf.menu);
        /* add element to menu */
        menuContainer.appendChild(thisProduct.element);
  
      }
    getElements(){
        thisProduct.card = thisProduct.element.querySelektor(select.containerOf.pages);
        thisProduct.home = thisProduct.element.querySelektor(select.containerOf.home);
        thisProduct.products = thisProduct.element.querySelektor(select.containerOf.products);
        thisProduct.contact = thisProduct.element.querySelektor(select.containerOf.contact)
    }

    
}

export default Product