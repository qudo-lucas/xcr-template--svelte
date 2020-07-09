import { writable } from "svelte/store";
import { Machine, interpret } from "xstate";
import ComponentTree from "xstate-component-tree";

import config from "shared/machines/main.machine.js";
import routes from "shared/routes.js";

// Add routes as top level events
const updatedConfig = {
    ...config,

    on : {
        ...config.on,
        ...routes,
    },
};

// eslint-disable-next-line new-cap
const machine = Machine(updatedConfig);
const service = interpret(machine);

const routesMap = new Map(Object.entries(routes));

// Component tree
const components = writable([],
    (set) => new ComponentTree(service, set)
);

service.start();

// Expose the service in the console
if(__dev__) {
    setTimeout(() => {
        window.state = service;
    }, 1000);
}

// Handle routing
const updateViewFromURL = () => {
    // Everything after the hash
    // TODO: Parse out params and assign to xstate context
    // TODO: regex it all up once I finalize url patterns to be used
    const path = window.location.hash.substring(2);

    if(routesMap.has(path)) {
        service.send(path);
    }
};

updateViewFromURL();

// Update url if current state matches one of the routes in routes.js
service.subscribe((current) =>
    routesMap.forEach((value, url) => {
        if(current.matches(value)) {
            history.pushState({}, "Xstate View Controller", `#/${url}`);
        }
    })
);

// Recheck the URL when these things happen
// TODO: This isn't super reliable.
// TODO: Figure out the best url change hook to tap into.
window.onpopstate = updateViewFromURL;
window.onhashchange = updateViewFromURL;

export default service;

export {
    components,
};
