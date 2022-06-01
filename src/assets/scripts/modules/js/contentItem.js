/**
 * Class representing a content item (.content__item).
 */
export class ContentItem {
    // DOM elements    
    /**
     * Constructor.
     * @param {Element} DOM_el - the .content__item element.
     */
    constructor(DOM_el) {
        this.DOM = {
            // Main element (.content__item)
            el: null,
            // .content__item-title
            title: null,
            // .content__item-text
            text: null,
        };
        this.DOM.el = DOM_el;
        // this.DOM.title = this.DOM.el.querySelector('.content__item-title');
        // this.DOM.text = this.DOM.el.querySelector('.content__item-text');

    }
}
