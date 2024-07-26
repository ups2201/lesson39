import {RoutersHistory} from "./RoutersHistory";
import {RoutersHash} from "./RoutersHash";

export class Router2 {
    router: RoutersHash | RoutersHistory;

    constructor(mode: RouterMode) {
        switch (mode) {
            case RouterMode.HASH_API: {
                this.router = new RoutersHash();
                break;
            }
            case RouterMode.HISTORY_API: {
                this.router = new RoutersHistory();
                break;
            }
        }
    }
    get() {
        return this.router;
    }
}

export enum RouterMode {
    HASH_API,
    HISTORY_API,
}