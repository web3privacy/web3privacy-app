// stores.js
import { writable } from "svelte/store";

export const activeCategory = writable("All");
export const projectCounts = writable({});
