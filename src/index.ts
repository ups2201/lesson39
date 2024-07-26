import {RouterFactory, RouterMode} from "./RouterFactory";
import {Route} from "./RouterParent";

const render = (content) =>
    (document.getElementById("root").innerHTML = `<h2>${content}</h2>`);

const createLogger =
    (content, shouldRender = true) =>
        (...args) => {
            console.log(`LOGGER: ${content} args=${JSON.stringify(args)}`);
            if (shouldRender) {
                render(content);
            }
        };

const routers = new RouterFactory().create(RouterMode.HISTORY_API);

const route1:Route = {
    match: (path) => path === "/contacts",
    onBeforeEnter: createLogger("[before] /contacts", false),
    onEnter: createLogger("/contacts"),
    onLeave: createLogger("[leaving] /contacts", false),
};
routers.addRoute(route1)

const route2:Route = {
    match: "/about",
    onEnter: createLogger("/about"),
};
routers.addRoute(route2)

const route3:Route = {
    match: "/about/us",
    onEnter: createLogger("/about/us"),
};
routers.addRoute(route3)

const route5:Route = {
    match: "/",
    onEnter: createLogger("/"),
};
routers.addRoute(route5)

const route4:Route = {
    match: /.*/,
    onEnter: createLogger("/.*"),
};
const unsubscribe = routers.addRoute(route4);

// const routers = new RouterFactory().create(RouterMode.HASH_API);
//
// const route1:Route = {
//     match: (path) => path === "#/contacts",
//     onBeforeEnter: createLogger("[before] #/contacts", false),
//     onEnter: createLogger("#/contacts"),
//     onLeave: createLogger("[leaving] #/contacts", false),
// };
// routers.addRoute(route1)
//
// const route2:Route = {
//     match: "#/about",
//     onEnter: createLogger("#/about"),
// };
// routers.addRoute(route2)
//
// const route3:Route = {
//     match: "#/about/us",
//     onEnter: createLogger("#/about/us"),
// };
// routers.addRoute(route3)
//
// const route5:Route = {
//     match: "#/",
//     onEnter: createLogger("#/"),
// };
// routers.addRoute(route5)
//
// const route4:Route = {
//     match: /.*/,
//     onEnter: createLogger("#/"),
// };
//
// const unsubscribe = routers.addRoute(route4);

document.body.addEventListener("click", (event) => {
    if (!(event.target as HTMLElement).matches("a")) {
        return;
    }
    event.preventDefault();
    const url = (event.target as HTMLElement).getAttribute("href");
    routers.go(url, { url });
    unsubscribe();
});
