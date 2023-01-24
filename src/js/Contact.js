import { select, templates } from './settings.js';
import utils from './utils.js';

class Contact {
    constructor (element) {
       const thisContact = this;

       thisContact.getElements(element);
       thisContact.render();

    }

    getElements(element) {
        const thisContact = this;

        thisContact.dom = {};
        thisContact.dom.wrapper = element;
    }
    render() {
        const thisContact = this;

        const generatedHTML = templates.contact();
        thisContact.element = utils.createDOMFromHTML(generatedHTML);
        const contactContainer = document.querySelector(select.containerOf.contactWrapper);
        contactContainer.appendChild(thisContact.element);
    }
}

export default Contact;
