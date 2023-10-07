<script>
  import { onMount } from "svelte";
  import { activeCategory, projectCounts } from "../stores/store.js";
  import { calculateCounts } from "../lib/utils/calculateCounts.js";
  import { get } from "svelte/store";

  const countsPromise = calculateCounts(); // Call calculateCounts directly

  console.log("countsPromise");

  countsPromise.then((counts) => {
    console.log(counts);
    projectCounts.set(counts); // Set the store value once the promise resolves
  });

  function setActiveCategory(category) {
    activeCategory.set(category);
  }

  const activeCategoryValue = get(activeCategory);
</script>

<div class="flex flex-col items-start justify-start gap-8 w-1/4 box-border">
  <div class="flex flex-col items-start justify-start gap-2 box-border">
    {#each Object.entries($projectCounts) as [category, count]}
      <button
        class="flex items-center justify-center gap-1 p-2 {activeCategoryValue ==
        category
          ? 'bg-white text-black'
          : 'hover:bg-white/20'}"
        on:click={() => setActiveCategory(category)}
      >
        <div class="flex gap-1">
          <span class="text-xl font-bold leading-7 box-border text-left w-min"
            >{category}</span
          >
          {#if count !== null}
            <span class="text-gray-400 text-lg font-light leading-7 box-border"
              >({count})</span
            >
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>
