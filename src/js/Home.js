import { select, templates } from './settings.js';
import utils from './utils.js';

class Home {
    constructor (element) {
       const thisHome = this;

       thisHome.getElements(element);
       thisHome.render();

    }

    getElements(element) {
        const thisHome = this;

        thisHome.dom = {};
        thisHome.dom.wrapper = element;
    }
    render() {
        const thisHome = this;

        const generatedHTML = templates.home();
        thisHome.element = utils.createDOMFromHTML(generatedHTML);
        const homeContainer = document.querySelector(select.containerOf.homeWrapper);
        homeContainer.appendChild(thisHome.element);
    }
}

export default Home;
