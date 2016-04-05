import {XmlComponent, Attributes} from "../../xml-components";

export class PageMargin implements XmlComponent {
    private pgMar: Array<XmlComponent>;
    
    xmlKeys = {
        pgMar: 'w:pgMar'
    }

    constructor() {
        this.pgMar = new Array<XmlComponent>();
        this.pgMar.push(new Attributes({
            top: "1440",
            right: "1440",
            bottom: "1440",
            left: "1440",
            header: "708",
            footer: "708",
            gutter: "0"
        }));
    }
}