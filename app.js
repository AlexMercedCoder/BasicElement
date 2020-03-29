class TestTest extends BasicElement {
    constructor() {
        super({ hello: 'hello' });
    }
    render(state, props) {
        return `<h1>${state.hello}</h1>
            <h2>${props.user}</h2>`;
    }
}

BasicElement.tag('test-test', TestTest);
