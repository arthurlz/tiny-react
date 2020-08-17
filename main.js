import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div id="div1">abc</div>
    <div id="div2"></div>
    <div id="div3"></div>
</MyComponent>, document.body)