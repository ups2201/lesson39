import {RouterHash} from "./RouterHash";
import {RouterHistory} from "./RouterHistory";

export type State = {
    path: string;
    state: any;
}

export enum RouterMode {
    HASH_API,
    HISTORY_API,
}

export class RouterFactory {
    create(mode: RouterMode) {
        switch (mode) {
            case RouterMode.HASH_API: {
                return new RouterHash();
            }
            case RouterMode.HISTORY_API: {
                return new RouterHistory();
            }
        }
    }
}