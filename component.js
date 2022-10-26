class LText extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<text style="color:${this.color}">${this.content}<text>`
    }

    get color() {
        return this.getAttribute("color")
    }
    set color(value) {
        return this.setAttribute("color", value)
    }

    get content() {
        return this.getAttribute("content")
    }
    set content(value) {
        return this.setAttribute("content", value)
    }



}


//如果没有检测到这个组建，新建一个
if (!customElements.get('l-text')) {
    customElements.define('l-text', LText);
}
