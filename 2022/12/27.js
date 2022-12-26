class KBElement extends HTMLElement {
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

customElements.define('kb-element', KBElement);

class KBAppViewElement extends KBElement {
    constructor() {
        super(); 

        this.hide();
    }
}

customElements.define('kb-appview', KBAppViewElement);