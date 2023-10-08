<script>
  import { onMount } from "svelte";
  import { activeCategory } from "../stores/store.js";
  import { get } from "svelte/store";

  export let bundle;

  for (let category of bundle.categories) {
    category.count = bundle.projects.filter(p => p.categories?.includes(category.id)).length
  }
  const sortedCategories = bundle.categories.sort((x, y) => x.count < y.count ? 1 : -1)

  function setActiveCategory(category) {
    activeCategory.set(category);
  }
  const activeCategoryValue = get(activeCategory);
</script>

<div class="flex flex-col items-start justify-start gap-8 w-1/4 box-border">
  <div class="flex flex-col items-start justify-start gap-2 box-border">
    {#each sortedCategories as category}
      <button
        class="flex items-center justify-center gap-1 p-2 {activeCategoryValue ==
        category
          ? 'bg-white text-black'
          : 'hover:bg-white/20'}"
        on:click={() => setActiveCategory(category)}
      >
        <div class="flex gap-1">
          <span class="text-xl font-bold leading-7 box-border text-left w-min"
            >{category.name}</span
          >
          {#if category.count !== null}
            <span class="text-gray-400 text-lg font-light leading-7 box-border"
              >({category.count})</span
            >
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>
