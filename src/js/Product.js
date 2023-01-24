import { select, templates } from './settings.js';
import utils from './utils.js';

class Product {
    constructor (id, data) {
        const thisProduct = this;

        thisProduct.id = id;
        thisProduct.data = data;

        thisProduct.renderInMenu();
    }

    renderInMenu(){
        const thisProduct = this;//renderowanie produktów na stronie
  
        /* generate HTML based on template */
        const generatedHTML = templates.product(thisProduct.data);
        //console.log(this);
        /* create element using utils.createElementFromHTML -tworzenie lementu DOM*/ 
        thisProduct.element = utils.createDOMFromHTML(generatedHTML);
        /* find menu container */
        const menuContainers = document.querySelectorAll(select.containerOf.menu);
        console.log(menuContainers);
        for(let menuContainer of menuContainers){
            menuContainer.appendChild(thisProduct.element.cloneNode(true));
        }
  
      }
    
}

export default Product;