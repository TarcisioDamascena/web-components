class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left")

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right")

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default.jpg";
        newsImage.alt = "Imagem da notícia";

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent =
            `
        .card {
            width: 80%;
            height: 200px;
            display: flex;
            box-shadow: 10px 12px 16px -3px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 10px 12px 16px -3px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 10px 12px 16px -3px rgba(0, 0, 0, 0.75);
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card-left>span {
            font-weight: 400;
        }

        .card-left>a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }

        .card-left>p {
            color: rgb(70, 70, 70);
        }

        .card-right {
            display: flex;
            justify-content: center;
        }

        card-right img {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
        `

        return style;
    }
}

customElements.define('card-news', CardNews)