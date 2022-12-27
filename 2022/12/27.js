class SpHTMLElement extends HTMLElement {
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

    open() {
        this.show();
    }

    close() {
        this.hide();
    }

    select() {
        this.setAttribute('aria-selected', true);
    }

    deselect() {
        this.setAttribute('aria-selected', false);
    }

    disable() {
        this.setAttribute('aria-disabled', true);
    }

    enable() {
        this.setAttribute('aria-disabled', false);
    }

    expand() {
        this.setAttribute('aria-expanded', true);
    }

    contract() {
        this.setAttribute('aria-expanded', false);
    }

    agent() {
        // os, os-version, app-version
        this.setAttribute('data-agent', '');
    }

    animation(value) {
        this.setAttribute('data-animation', value);
    }

    render(data) {
        this.innerHTML = data;
    }
}

customElements.define('sp-element', SpHTMLElement);

class SpHTMLAppViewElement extends SpHTMLElement {
    constructor() {
        super(); 
    }
}

customElements.define('app-view', SpHTMLAppViewElement);

class SpHTMLAppLoadingElement extends SpHTMLElement {
    constructor() {
        super();

        this.animation('fade,1'); 
    }
}

customElements.define('app-loading', SpHTMLAppLoadingElement);

class AppElementSelector {
    get appview() {
        return document.querySelector('app-view');
    }
    get loading() {
        return document.querySelector('app-loading');
    }
}

const $elements = new AppElementSelector();

window.addEventListener('load', function() {
    setTimeout(function() {
        $elements.loading.close();
    }, 1000);
});

