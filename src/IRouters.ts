import {Route, State} from "./Routers";

export interface IRouters {
    match: string | RegExp | Function;
    currentPath: string;
    previous: State;
    routers: Route[];
    state: any;
    addRoute(route: Route);
    go(url: string, state: any);
    handleAllListeners();
    generateId(): number;
    isMatch(match: string | Function | RegExp, path: string): boolean;
    getState();
}