//////////////
//CaptureProps
/////////////

const captureProps = (element) => {
    const att = [...element.attributes];
    const entries = att.map((value) => {
        return [value.name, value.value];
    });

    return Object.fromEntries(entries);
};

/////////////////////////
//BasicElement
/////////////////////////

export class BasicElement extends HTMLElement {
    constructor(state = {}) {
        super();
        this.state = state;
        this.props = captureProps(this);
        this.attachShadow({ mode: 'open' });
        this.rend();
    }

    static tag(name, element) {
        window.customElements.define(name, element);
    }

    rend() {
        this.props = captureProps(this);
        this.shadowRoot.innerHTML = this.render(this.state, this.props);
        this.postRender(this.state, this.props);
    }

    render(state, props) {
        return ``;
    }

    postRender(state, props) {
        return null;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.rend();
    }
}
