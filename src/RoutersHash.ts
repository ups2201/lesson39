import {RoutersGeneral} from "./RoutersGeneral";

export class RoutersHash extends RoutersGeneral {

    constructor() {
        super();
        window.addEventListener("hashchange", this.handleAllListeners.bind(this));
        this.handleAllListeners();
    }

    go(url, state): void {
        this.previous.path = this.currentPath;
        this.previous.state = this.state;
        location.hash = url;
        this.currentPath = location.pathname;
        this.state = state;
        this.handleAllListeners();
    };
}