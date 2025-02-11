class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //TODO: Base do componente
        const componenteRoot = document.createElement("h1");
        componenteRoot.textContent = this.getAttribute("titulo")

        //TODO: Estilização do componente
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `

        //TODO: Enviar para a shadow
        shadow.appendChild(componenteRoot);
        shadow.appendChild(style);

    }
}

customElements.define('titulo-dinamico', TituloDinamico)