import {RoutersGeneral} from "./RoutersGeneral";

export class RoutersHistory extends RoutersGeneral {

    constructor() {
        super();
        window.addEventListener("popstate", this.handleAllListeners.bind(this));
        this.handleAllListeners();
    }

    go(url, state): void {
        this.previous.path = this.currentPath;
        this.previous.state = history.state;
        history.pushState(state, url, url);

        this.currentPath = location.pathname;

        this.handleAllListeners();
    };

}