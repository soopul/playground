class SpHTMLCommonElement extends HTMLElement {
    constructor() {
        super(); 
    }

    disabled() {
        this.ariaDisabled = true; 
    }

    enabled() {
        this.ariaDisabled = false; 
    }
}

customElements.define('sp-component', class extends SpHTMLCommonElement {
    constructor() {
        super();
    }
}); 