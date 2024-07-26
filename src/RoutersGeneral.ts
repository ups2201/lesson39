import {Route, State} from "./Routers";
import {IRouters} from "./IRouters";
import {RoutersHistory} from "./RoutersHistory";
import {RoutersHash} from "./RoutersHash";

export class RoutersGeneral implements IRouters {
    match: string | RegExp | Function;
    currentPath: string = window.location.pathname;
    previous: State = {
        path: "",
        state: undefined
    };
    routers: Route[] = [];
    state: any;

    getState() {
        return this.state;
    }

    addRoute(route: Route) {
        console.log(route);
        const id = this.generateId();
        route.id = id;
        this.routers.push(route);
        return () => {
            this.routers =  this.routers.filter((router) => router.id !== id);
        };
    }

    handleAllListeners() {
        this.routers.forEach((route) => {
            const args = {url: this.currentPath, state: this.getState(), previous: this.previous};

            route.onBeforeEnter && this.isMatch(route.match, this.currentPath) && route.onBeforeEnter(args);
            this.isMatch(route.match, this.currentPath) && route.onEnter(args);
            route.onLeave && this.isMatch(route.match, this.previous.path) && route.onLeave(args);
        });
    };

    generateId(): number {
        const getRandomNumber = () => Math.floor(Math.random() * this.routers.length * 1000);
        const doesExist = (id) => this.routers.find((router) => router.id === id);

        let id = getRandomNumber();
        while (doesExist(id)) {
            id = getRandomNumber();
        }
        return id;
    };

    isMatch(match: string | Function | RegExp, path: string): boolean {
        if (match instanceof RegExp) {
            return match.test(path);
        }
        if (typeof match === "function") {
            return match(path);
        }
        return match === path;
    }

    go(url: string, state: any) {
    }
}

// export class Router {
//     private readonly router: RoutersHash | RoutersHistory;
//
//     constructor(mode: RouterMode) {
//         switch (mode) {
//             case RouterMode.HASH_API:
//                 this.router = new RoutersHash();
//                 break;
//             case RouterMode.HISTORY_API:
//                 this.router = new RoutersHistory();
//                 break;
//         }
//     }
//     get() {
//         return this.router;
//     }
// }
//
// export enum RouterMode {
//     HASH_API = "HASH_API",
//     HISTORY_API = "HISTORY_API",
// }