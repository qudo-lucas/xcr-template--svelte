import { writable } from "svelte/store";
import { Machine, interpret } from "xstate";
import ComponentTree from "xstate-component-tree";

import config from "../machines/main.machine.js";

// eslint-disable-next-line new-cap
const machine = Machine(config);
const service = interpret(machine);

const state = writable({});

const components = writable([], 
	(set) => new ComponentTree(service, set)
);

service.start();

state.set(service)

export default state;

export {
    components,
};
