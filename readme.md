# BasicElement

The Simplest abstraction over HTMLElement adding on reactive state and nothing else. Less than 1kb.

CDN Link: http://www.alexmercedcoder.com/basic.js (11kb)

CDN Link (ES 6 MODULE VERSION): http://www.alexmercedcoder.com/basicmodule.js (13 kb)

CDN Link (Node MODULE.Exports VERSION): http://www.alexmercedcoder.com/basicnpm.js (14 kb)

## Creating a Component

```
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

```

Using the Component in your HTML

```
<test-test user="james"></test-test>
<button
    onclick="document.querySelector('test-test').setState({hello: 'cheese'})"
>
    Click Me
</button>
```

Two rules in constructing a new components:

1. Pass the initial state to super() in the constructor (defaults to an empty object)
2. define a render function that returns your template string
3. for events that need to occur after render, there is also a postRender(state, props) function you can define for that purpose
