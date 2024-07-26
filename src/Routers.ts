export type Route = {
    match: string | RegExp | Function;
    onEnter(any): any;
    onLeave?(any): any;
    onBeforeEnter?(any): any;
    id?: number;
}

export type State = {
    path: string;
    state: any;
}

export class Routers {
    match: string | RegExp | Function;
    currentPath: string = window.location.pathname;
    previous: State = {
        path: "",
        state: undefined
    };
    routers: Route[] = [];

    constructor() {
        window.addEventListener("popstate", this.handleAllListeners.bind(this));
        this.handleAllListeners();
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

    go(url, state): void {
        this.previous.path = this.currentPath;
        this.previous.state = history.state;
        history.pushState(state, url, url);

        this.currentPath = location.pathname;

        this.handleAllListeners();
    };

    handleAllListeners() {
        this.routers.forEach((route) => {
            const args = {url: this.currentPath, state: history.state, previous: this.previous};

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
}