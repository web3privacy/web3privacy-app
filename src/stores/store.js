// stores.js
import { writable } from "svelte/store";

export const activeCategory = writable("featured");
export const projectCounts = writable({});
