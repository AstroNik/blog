export function processText(text) {
    let mainElement = document.createElement("div");

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

    }
    console.log(stack)
    return mainElement;
}

function createCodeBlock(text) {
    let codeBlock = document.createElement("pre");
    let code = document.createElement("code");
    let codeText = document.createTextNode();
    code.appendChild(codeText);
    codeBlock.appendChild(codeBlock);
    return codeBlock;
}

function createHeader(text) {
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(text);
    h3.appendChild(h3Text);
    return h3;
}

function createParagraph(text) {
    let p = document.createElement("p");
    let pText = document.createTextNode(text);
    p.appendChild(pText);
    return p;
}