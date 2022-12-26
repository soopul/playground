class KbHtmlElement extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [];
    }

    attributeChagnedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        
    }

    disconnectedCallback() {

    }

    adoptedCallback() {

    }

    hide() {
        this.setAttribute('aria-hidden', true);
    }

    show() {
        this.setAttribute('aria-hidden', false);
    }

    render(data) {
        this.innerHTML = data;
    }
}

customElements.define('kb-element', KbHtmlElement);

class KbHtmlAppViewElement extends KbHtmlElement {
    constructor() {
        super(); 

        this.hide();
    }
}

customElements.define('kb-appview', KbHtmlAppViewElement);
