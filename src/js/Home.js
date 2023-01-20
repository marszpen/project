import { select, templates } from './settings.js';
import utils from './utils.js';

class Home {
    constructor () {
       const thisHome = this;

       thisHome.getElements();
       thisHome.render();

    }
    getElements() {
        const thisHome = this;

        thisHome.dom.homeHeader = document.querySelector(select.nav.homeHeader);

    }
    render() {
        const thisHome = this;

        const generatedHTML = templates.home();
        thisHome.element = utils.createDOMFromHTML(generatedHTML);
        const homeContainer = document.querySelector(select.containerOf.homeWrapper);
        homeContainer.appendChild(thisHome.element);
    }
}
export default Home
